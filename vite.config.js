import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import fs from 'fs';

// Automatically find all HTML files in pages/ and root
const getPagesInput = () => {
  const pagesDir = resolve(__dirname, 'pages');
  const input = {
    main: resolve(__dirname, 'index.html')
  };

  if (fs.existsSync(pagesDir)) {
    const files = fs.readdirSync(pagesDir);
    files.forEach(file => {
      if (file.endsWith('.html')) {
        const key = file.replace('.html', '');
        input[key] = resolve(pagesDir, file);
      }
    });
  }
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
