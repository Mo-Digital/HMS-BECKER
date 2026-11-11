// Erzeugt PNG-Icons aus public/favicon.svg  →  npm run icons
import sharp from 'sharp';
const src = 'public/favicon.svg';
for (const [name, size] of [['favicon-32.png', 32], ['apple-touch-icon.png', 180], ['icon-192.png', 192], ['icon-512.png', 512]]) {
  await sharp(src, { density: 600 }).resize(size, size).png().toFile(`public/${name}`);
  console.log('✓', name);
}
