import fs from 'node:fs/promises';
import fg from 'fast-glob';

async function main() {
  const files = await fg(['src/app/club/*/page.tsx', 'src/app/committee/Developers/page.tsx']);

  for (const file of files) {
    let content = await fs.readFile(file, 'utf8');
    
    // Check if FaEnvelope or FaLinkedin are used
    if (content.includes('FaEnvelope') || content.includes('FaLinkedin')) {
      // Find the import line for react-icons/fa
      const importRegex = /import\s+{([^}]+)}\s+from\s+['"]react-icons\/fa['"]\s*;/;
      const match = importRegex.exec(content);
      
      if (match) {
        let imports = match[1].split(',').map(s => s.trim()).filter(s => s);
        let changed = false;
        
        if (!imports.includes('FaEnvelope')) {
            imports.push('FaEnvelope');
            changed = true;
        }
        if (!imports.includes('FaLinkedin')) {
            imports.push('FaLinkedin');
            changed = true;
        }
        
        if (changed) {
            content = content.replace(importRegex, `import { ${imports.join(', ')} } from "react-icons/fa";`);
            await fs.writeFile(file, content, 'utf8');
            console.log("Fixed imports in", file);
        }
      } else {
        // If there is no react-icons/fa import at all, add it after the first import or at the top
        content = `import { FaEnvelope, FaLinkedin } from "react-icons/fa";\n` + content;
        await fs.writeFile(file, content, 'utf8');
        console.log("Added import to", file);
      }
    }
  }
}

main().catch(console.error);
