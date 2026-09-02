import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = '/Users/chaitanyasaagar/Desktop/HOSCAA/hoscaa-new/public/ClubPages';

const IMAGE_EXTENSIONS = new Set([
    '.jpg',
    '.jpeg',
    '.png',
    '.webp',
    '.avif',
    '.gif',
    '.bmp',
    '.tiff',
    '.svg'
]);

async function deleteImages(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            await deleteImages(fullPath);
            continue;
        }

        if (IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
            await fs.unlink(fullPath);
            console.log(`Deleted: ${fullPath}`);
        }
    }
}

async function main() {
    await deleteImages(ROOT);
    console.log('\nDone.');
}

main().catch(error => {
    console.error(error);
    process.exit(1);
});