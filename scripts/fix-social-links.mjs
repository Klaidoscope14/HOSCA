import fs from 'node:fs/promises';
import fg from 'fast-glob';

async function main() {
  const files = await fg(['src/app/club/*/page.tsx']);

  for (const file of files) {
    let content = await fs.readFile(file, 'utf8');
    
    // Fix Facebook
    content = content.replace(/className="([^"]*)hover:bg-gray-300([^"]*)"([^>]*)>(\s*)<FaFacebook/g, 
        (match, p1, p2, p3, p4) => `className="${p1}hover:bg-[#1877F2] hover:text-white${p2}"${p3}>${p4}<FaFacebook`);

    // Let's also make sure we don't have other unstyled hovers like hover:bg-gray-200 or whatever
    content = content.replace(/className="([^"]*)hover:bg-gray-[0-9]+([^"]*)"([^>]*)>(\s*)<FaFacebook/g, 
        (match, p1, p2, p3, p4) => `className="${p1}hover:bg-[#1877F2] hover:text-white${p2}"${p3}>${p4}<FaFacebook`);

    await fs.writeFile(file, content, 'utf8');
  }
}
main();
