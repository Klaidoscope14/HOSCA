import fs from 'node:fs/promises';
import path from 'node:path';
import fg from 'fast-glob';

async function main() {
  const peopleData = JSON.parse(await fs.readFile('people.json', 'utf8'));
  
  const nameMap = new Map();
  for (const person of peopleData) {
    if (!person.Name) continue;
    let normName = person.Name.toLowerCase().replace(/[^a-z]/g, '');
    if (normName === 'drchandrashekharprajapati') normName = 'csp'; // special handling
    // handle multiple forms if needed
    nameMap.set(normName, person);
  }

  // add extra mappings if people JSON has slight mismatches
  // e.g. "Chaitanya Saagar" vs "Chaitanya Saagar", "Aayan Tejani" etc.

  const files = await fg(['src/app/club/*/page.tsx', 'src/app/committee/Developers/page.tsx']);

  const uiReplacement = `          <div className="flex flex-col items-center gap-2 mt-4 pb-4">
            {member.email && (
              <CardItem
                translateZ={20}
                as="a"
                href={\`mailto:\${member.email}\`}
                className="flex items-center gap-2 text-sm hover:text-red-500 transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-4 h-4 shrink-0" />
                <span className="truncate max-w-[180px]" title={member.email}>{member.email}</span>
              </CardItem>
            )}
            {member.linkedinUrl && (
              <CardItem
                translateZ={20}
                as="a"
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-[#0077B5] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 shrink-0" />
                <span>LinkedIn</span>
              </CardItem>
            )}
          </div>`;

  for (const file of files) {
    let content = await fs.readFile(file, 'utf8');
    
    // First, update the member object properties
    // We match an object like:
    // {
    //   id: 1,
    //   name: 'Devesh Yadav',
    //   ...
    // }
    // We can replace the whole array by finding the declaration const ...Members: ClubMember[] = [ ... ];
    // But a simpler regex to update properties of each object:
    
    content = content.replace(/{\s*id:\s*\d+,\s*name:\s*(['"])(.*?)\1,[\s\S]*?}/g, (match, quote, name) => {
        const normName = name.toLowerCase().replace(/[^a-z]/g, '');
        const person = nameMap.get(normName);
        if (!person) {
            console.log("No match for", name, "in", file);
            return match;
        }
        
        let newMatch = match;
        
        // Remove existing email/linkedinUrl
        newMatch = newMatch.replace(/\s*email:\s*['"].*?['"],?/g, '');
        newMatch = newMatch.replace(/\s*linkedinUrl:\s*['"].*?['"],?/g, '');
        
        // Add new ones
        let adds = '';
        if (person.Outlook && person.Outlook.trim() !== '') {
            adds += `\n    email: "${person.Outlook.trim()}",`;
        }
        if (person.LinkedIn && person.LinkedIn.trim() !== '') {
            adds += `\n    linkedinUrl: "${person.LinkedIn.trim()}",`;
        }
        
        if (adds !== '') {
            // insert before the closing brace
            newMatch = newMatch.replace(/(\s*})$/, `${adds}$1`);
        }
        
        return newMatch;
    });

    // Now replace the UI section
    // The commented UI section looks like:
    //           <div className="flex justify-center gap-3 mt-4">
    //             {/*
    //             {member.email && (
    // ...
    //             )}
    //             */}
    //           </div>
    
    // Find the UI block.
    // Let's use a regex that matches from `<div className="flex justify-center gap-3 mt-4">` or similar
    // down to its closing `</div>`.
    
    // Using a simpler string replacement
    const oldUiRegex1 = /<div className="flex justify-center gap-3 mt-4">[\s\S]*?<\/div>/;
    const oldUiRegex2 = /<div className="flex justify-center gap-4 mt-4">[\s\S]*?<\/div>/; // for Developers page
    
    if (oldUiRegex1.test(content)) {
        content = content.replace(oldUiRegex1, uiReplacement);
    } else if (oldUiRegex2.test(content)) {
        content = content.replace(oldUiRegex2, uiReplacement);
    }
    
    await fs.writeFile(file, content, 'utf8');
    console.log("Updated", file);
  }
}

main().catch(console.error);
