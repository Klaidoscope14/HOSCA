import fs from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';

async function main() {
  const peopleData = JSON.parse(await fs.readFile('people.json', 'utf8'));
  
  // Normalize names for fuzzy matching
  const nameMap = new Map();
  for (const person of peopleData) {
    if (!person.Name) continue;
    const normName = person.Name.toLowerCase().replace(/[^a-z]/g, '');
    nameMap.set(normName, person);
  }

  const files = await fg(['src/app/club/*/page.tsx', 'src/app/committee/Developers/page.tsx', 'src/app/committee/gymkhana/page.tsx']);

  for (const file of files) {
    let content = await fs.readFile(file, 'utf8');
    let changed = false;

    // 1. Update data in the members arrays
    // We look for name: "..." or name: '...'
    const nameRegex = /name:\s*(['"])(.*?)\1/g;
    let match;
    const replacements = [];
    
    while ((match = nameRegex.exec(content)) !== null) {
      const originalName = match[2];
      const normName = originalName.toLowerCase().replace(/[^a-z]/g, '');
      const personInfo = nameMap.get(normName);
      
      if (personInfo) {
        const hasEmail = personInfo.Outlook && personInfo.Outlook.trim() !== '';
        const hasLinkedin = personInfo.LinkedIn && personInfo.LinkedIn.trim() !== '';
        
        // We'll just append email and linkedinUrl after the name if they don't exist, 
        // but it's safer to use regex replacement on the whole object block.
        // Let's do a simple string replacement in the specific object.
      }
    }
  }
}
main();
