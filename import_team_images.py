import os
import re
import shutil
import mimetypes
from pathlib import Path
from PIL import Image
import io
import pandas as pd
import requests
from tqdm import tqdm


# ==========================
# CONFIGURATION
# ==========================

PROJECT_ROOT = Path("/Users/chaitanyasaagar/Desktop/HOSCAA/hoscaa-new")

CSV_PATH = PROJECT_ROOT / "Website Updates 26-27 - Team HoSCA.csv"

COORDINATORS_DIR = PROJECT_ROOT / "public" / "Coordinators"
SUBCOORDS_DIR = PROJECT_ROOT / "public" / "SubCords"

HEADERS = {
    "User-Agent": "Mozilla/5.0"
}


# ==========================
# UTILITIES
# ==========================

def sanitize_filename(name: str):
    name = str(name).strip()

    # Replace any whitespace with _
    name = re.sub(r"\s+", "_", name)

    # Remove illegal filename characters
    name = re.sub(r'[<>:"/\\|?*]', "", name)

    # Remove repeated underscores
    name = re.sub(r"_+", "_", name)

    return name


def drive_file_id(url):

    if pd.isna(url):
        return None

    url = str(url)

    # Remove escape characters inserted by CSV
    url = url.replace("\\", "")

    patterns = [
        r"/d/([A-Za-zA-Z0-9_-]+)",
        r"id=([A-Za-zA-Z0-9_-]+)"
    ]

    for pattern in patterns:
        m = re.search(pattern, url)
        if m:
            return m.group(1)

    return None


def clean_existing_images(folder):
    """
    Delete all files inside every club folder.
    Keeps folder structure.
    """

    print(f"\nCleaning {folder}")

    if not folder.exists():
        return

    for root, dirs, files in os.walk(folder):
        for file in files:
            path = Path(root) / file
            try:
                path.unlink()
            except Exception:
                pass

# ==========================
# DOWNLOAD HELPERS
# ==========================

def get_unique_path(folder: Path, filename: str):
    """
    Returns a unique file path if filename already exists.
    Example:
        Rahul.png
        Rahul (1).png
        Rahul (2).png
    """

    stem = Path(filename).stem
    suffix = Path(filename).suffix

    candidate = folder / filename

    count = 1

    while candidate.exists():
        candidate = folder / f"{stem} ({count}){suffix}"
        count += 1

    return candidate


def detect_extension(image_bytes):
    try:
        img = Image.open(io.BytesIO(image_bytes))
        fmt = img.format.lower()

        mapping = {
            "jpeg": ".jpg",
            "jpg": ".jpg",
            "png": ".png",
            "webp": ".webp",
            "gif": ".gif",
            "bmp": ".bmp",
            "tiff": ".tiff"
        }

        return mapping.get(fmt, ".jpg")

    except Exception:
        return ".jpg"


def download_drive_image(file_id):
    """
    Downloads a public Google Drive file.

    Returns:
        bytes, extension
    """

    url = (
    f"https://drive.google.com/uc"
    f"?export=download&id={file_id}"
    )

    session = requests.Session()

    response = session.get(
        url,
        headers=HEADERS,
        stream=True
    )

    # Some Drive files require confirmation
    for key, value in response.cookies.items():
        if key.startswith("download_warning"):
            response = session.get(
                url,
                params={
                    "confirm": value,
                    "id": file_id
                },
                headers=HEADERS,
                stream=True
            )
            break

    response.raise_for_status()

    content = response.content

    ext = detect_extension(content)

    return content, ext


def save_person_image(
    folder: Path,
    person_name: str,
    drive_url: str
):
    """
    Downloads and saves a person's image.

    Returns:
        True on success
        False on failure
    """
    drive_url = drive_url.replace("\\", "")
    file_id = drive_file_id(drive_url)

    if not file_id:
        return False

    image_bytes, extension = download_drive_image(file_id)

    folder.mkdir(
        parents=True,
        exist_ok=True
    )

    filename = sanitize_filename(person_name) + extension

    save_path = get_unique_path(
        folder,
        filename
    )

    with open(save_path, "wb") as f:
        f.write(image_bytes)

    return True

# ==========================
# MAIN SCRIPT
# ==========================

def main():

    print("=" * 60)
    print("HoSCA Team Image Importer")
    print("=" * 60)

    clean_existing_images(COORDINATORS_DIR)
    clean_existing_images(SUBCOORDS_DIR)

    df = pd.read_csv(CSV_PATH)

    success = 0
    failed = []

    current_coord_club = None
    current_sub_club = None

    for _, row in tqdm(df.iterrows(), total=len(df)):

        # -----------------------
        # COORDINATORS
        # -----------------------

        club = row.iloc[0]
        name = row.iloc[1]
        photo = row.iloc[4]

        if pd.notna(club):
            club = str(club).strip()

            if club not in ["CLUB", ""]:
                current_coord_club = club

        if (
            current_coord_club
            and pd.notna(name)
            and pd.notna(photo)
            and str(photo).startswith("https://")
        ):

            try:

                save_person_image(
                    COORDINATORS_DIR / sanitize_filename(current_coord_club),
                    str(name).strip(),
                    str(photo).strip()
                )

                success += 1

            except Exception as e:

                failed.append(
                    (
                        str(name),
                        current_coord_club,
                        str(e)
                    )
                )

        # -----------------------
        # SUB COORDINATORS
        # -----------------------

        club = row.iloc[6]
        name = row.iloc[7]
        photo = row.iloc[10]

        if pd.notna(club):

            club = str(club).strip()

            if club not in ["CLUB", ""]:
                current_sub_club = club

        if (
            current_sub_club
            and pd.notna(name)
            and pd.notna(photo)
            and str(photo).startswith("https://")
        ):

            try:
                
                save_person_image(
                    SUBCOORDS_DIR / sanitize_filename(current_sub_club),
                    str(name).strip(),
                    str(photo).strip()
                )

                success += 1

            except Exception as e:

                failed.append(
                    (
                        str(name),
                        current_sub_club,
                        str(e)
                    )
                )

    print("\nFinished")
    print("Downloaded:", success)
    print("Failed:", len(failed))

    if failed:
        print("\nFailures:\n")
        for x in failed:
            print(x)

if __name__ == "__main__":
    main()