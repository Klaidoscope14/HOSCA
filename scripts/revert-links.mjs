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
                className="p-2 rounded-full border border-current opacity-70 hover:opacity-100 hover:text-red-500 hover:border-red-500 transition-all duration-300"
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
                className="p-2 rounded-full border border-current opacity-70 hover:opacity-100 hover:text-[#0077B5] hover:border-[#0077B5] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </CardItem>
            )}
          </div>`;

  const regex = /<div className="flex flex-col items-center gap-2 mt-4 pb-4">[\s\S]*?<\/div>/;

  for (const file of files) {
    let content = await fs.readFile(file, 'utf8');
    
    if (regex.test(content)) {
        content = content.replace(regex, uiReplacement);
        await fs.writeFile(file, content, 'utf8');
        console.log("Updated UI in", file);
    }
  }
}

main().catch(console.error);
