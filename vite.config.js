import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import fs from 'fs';
import path from 'path';

// Automatically find all HTML files
const getPagesInput = () => {
  const input = {
    main: resolve(__dirname, 'index.html')
  };

  const findHtmlFiles = (dir, prefix = '') => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        findHtmlFiles(fullPath, `${prefix}${file}_`);
      } else if (file.endsWith('.html')) {
        const key = prefix + file.replace('.html', '');
        input[key] = fullPath;
      }
    });
  };

  findHtmlFiles(resolve(__dirname, 'pages'), 'pages_');
  findHtmlFiles(resolve(__dirname, 'admin'), 'admin_');

  return input;
};

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: getPagesInput()
    }
  }
});
