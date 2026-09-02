import fs from 'node:fs/promises';
import path from 'node:path';

const ROOT = process.cwd();
const CLUB_PAGES_DIR = path.join(ROOT, 'public', 'ClubPages');
const CLUB_APP_DIR = path.join(ROOT, 'src', 'app', 'club');

async function main() {
  console.log('[update-club-pages] Scanning public/ClubPages...');
  
  const entries = await fs.readdir(CLUB_PAGES_DIR, { withFileTypes: true });
  
  const clubImageMap = new Map();
  
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    
    const clubDir = path.join(CLUB_PAGES_DIR, entry.name);
    // the folder name determines the slug matching logic.
    // Let's get the standard slug for each club based on the ones in page.tsx
    const files = await fs.readdir(clubDir);
    
    // Sort files logically
    const validFiles = files.filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg') || f.endsWith('.png'));
    validFiles.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
    
    // Convert to public URLs
    const urls = validFiles.map(f => `/ClubPages/${entry.name}/${f}`);
    
    // Try to guess slug from folder name (lowercase, removing spaces)
    let slug = entry.name.toLowerCase().replace(/\s+/g, '');
    // Handle special cases
    if (slug === 'qc') slug = 'quiz';
    if (slug === 'animeclub') slug = 'anime';
    
    clubImageMap.set(slug, urls);
  }
  
  // 1. UPDATE src/app/club/page.tsx
  const clubsPagePath = path.join(CLUB_APP_DIR, 'page.tsx');
  let clubsPageCode = await fs.readFile(clubsPagePath, 'utf8');
  
  // Replace `image: string;` with `images: string[];` in ClubCard type
  clubsPageCode = clubsPageCode.replace(/image:\s*string;/, 'images: string[];');
  
  // Now we need to parse the `const clubs: ClubCard[] = [...]` and replace `image: "..."` with `images: [...]`
  // A regex replacement for each club block
  clubsPageCode = clubsPageCode.replace(/slug:\s*"([^"]+)",([\s\S]*?)image:\s*"[^"]+"/g, (match, slug, middle) => {
      const urls = clubImageMap.get(slug) || [];
      // Pad to 4 if needed
      let top4 = urls.slice(0, 4);
      if (top4.length > 0) {
          while (top4.length < 4) {
              top4 = [...top4, ...urls];
          }
          top4 = top4.slice(0, 4);
      }
      return `slug: "${slug}",${middle}images: ${JSON.stringify(top4)}`;
  });
  
  await fs.writeFile(clubsPagePath, clubsPageCode);
  console.log('[update-club-pages] Updated src/app/club/page.tsx');
  
  // 2. UPDATE src/app/club/[slug]/page.tsx
  const appEntries = await fs.readdir(CLUB_APP_DIR, { withFileTypes: true });
  for (const appEntry of appEntries) {
      if (appEntry.isDirectory()) {
          const slug = appEntry.name;
          const innerPagePath = path.join(CLUB_APP_DIR, slug, 'page.tsx');
          try {
              let innerPageCode = await fs.readFile(innerPagePath, 'utf8');
              
              const urls = clubImageMap.get(slug) || [];
              const remainingUrls = urls.slice(4); // Skip the first 4
              
              // Replace images={[...]} in ImageGrid
              // Using a regex to find images={[ ... ]} 
              // We want to match images={ ... } spanning multiple lines
              const regex = /images=\{\[[\s\S]*?\]\}/;
              if (regex.test(innerPageCode)) {
                  innerPageCode = innerPageCode.replace(regex, `images={${JSON.stringify(remainingUrls, null, 2)}}`);
                  await fs.writeFile(innerPagePath, innerPageCode);
                  console.log(`[update-club-pages] Updated inner page for ${slug}`);
              }
          } catch (e) {
              // Ignore if page.tsx doesn't exist
          }
      }
  }
  
  console.log('[update-club-pages] Done');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
