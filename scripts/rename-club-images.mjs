import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const ROOT = process.cwd();
const CLUB_PAGES_DIR = path.join(ROOT, 'public', 'ClubPages');

async function main() {
  console.log('[rename-club-images] Scanning public/ClubPages...');
  
  let entries;
  try {
    entries = await fs.readdir(CLUB_PAGES_DIR, { withFileTypes: true });
  } catch (err) {
    console.error(`[rename-club-images] Error reading directory ${CLUB_PAGES_DIR}:`, err.message);
    process.exit(1);
  }
  
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    
    const clubDir = path.join(CLUB_PAGES_DIR, entry.name);
    // clean up club name: trim trailing/leading spaces, replace internal spaces with '_'
    const clubName = entry.name.trim().replace(/\s+/g, '_');
    
    const files = await fs.readdir(clubDir);
    
    // Group files by their basename (without extension)
    // To ensure we group .jpg, .webp, .avif correctly.
    // Also ignore hidden files like .DS_Store
    const fileGroups = new Map();
    
    for (const file of files) {
      if (file.startsWith('.')) continue;
      
      const ext = path.extname(file);
      const base = path.basename(file, ext);
      
      if (!fileGroups.has(base)) {
        fileGroups.set(base, []);
      }
      fileGroups.get(base).push({ file, ext });
    }
    
    // Sort basenames to have a deterministic order
    // Using localeCompare with numeric: true ensures natural sorting (e.g. IMG-2 before IMG-10)
    const sortedBases = Array.from(fileGroups.keys()).sort((a, b) => {
      return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });
    
    const tempRenames = [];
    
    let counter = 1;
    for (const base of sortedBases) {
      const groupFiles = fileGroups.get(base);
      
      for (const { file, ext } of groupFiles) {
        const oldPath = path.join(clubDir, file);
        
        // Final desired name
        const newName = `${clubName}_${counter}${ext}`;
        const newPath = path.join(clubDir, newName);
        
        if (oldPath !== newPath) {
            // Use a temporary unique name to avoid any collision during rename
            // e.g. avoiding overwriting when names swap or shift
            const tempName = `${clubName}_${counter}_${crypto.randomUUID()}${ext}`;
            const tempPath = path.join(clubDir, tempName);
            
            tempRenames.push({
                oldPath,
                tempPath,
                newPath,
                originalFile: file,
                newName: newName
            });
        }
      }
      counter++;
    }
    
    // Pass 1: rename to temp paths to prevent collisions
    for (const renameJob of tempRenames) {
        await fs.rename(renameJob.oldPath, renameJob.tempPath);
    }
    
    // Pass 2: rename temp paths to final paths
    for (const renameJob of tempRenames) {
        await fs.rename(renameJob.tempPath, renameJob.newPath);
        console.log(`[rename-club-images] Renamed: ${entry.name}/${renameJob.originalFile} -> ${entry.name}/${renameJob.newName}`);
    }
  }
  console.log('[rename-club-images] Done');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
