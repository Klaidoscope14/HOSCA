import fs from 'node:fs/promises';
import fg from 'fast-glob';

async function main() {
  const files = await fg(['src/app/club/*/page.tsx', 'src/app/committee/Developers/page.tsx']);

  const uiReplacement = `          <div className="flex justify-center gap-4 mt-4 pb-4">
            {member.email && (
              <CardItem
                translateZ={20}
                as="a"
                href={\`mailto:\${member.email}\`}
                className="p-2.5 rounded-full bg-white/90 text-black shadow-sm border border-black/10 hover:bg-red-500 hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-4 h-4" />
              </CardItem>
            )}
            {member.linkedinUrl && (
              <CardItem
                translateZ={20}
                as="a"
                href={member.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/90 text-black shadow-sm border border-black/10 hover:bg-[#0077B5] hover:text-white hover:border-transparent hover:-translate-y-1 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </CardItem>
            )}
          </div>`;

  // We need to match the previous replacement which was:
  // <div className="flex justify-center gap-4 mt-4 pb-4"> ... </div>
  // Because it spans multiple lines, we can use a regex that matches from `<div className="flex justify-center gap-4 mt-4 pb-4">` to the matching closing `</div>`.
  // Since we know exactly how many lines it is and it doesn't contain nested divs, we can match up to the first </div>
  const regex = /<div className="flex justify-center gap-4 mt-4 pb-4">[\s\S]*?<\/div>/;

  for (const file of files) {
    let content = await fs.readFile(file, 'utf8');
    
    if (regex.test(content)) {
        content = content.replace(regex, uiReplacement);
        await fs.writeFile(file, content, 'utf8');
        console.log("Fixed icon colors in", file);
    }
  }
}

main().catch(console.error);
