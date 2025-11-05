/**
 * Create placeholder images for development
 * Run with: node scripts/create-placeholders.js
 */

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Ensure directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const placeholders = [
  { name: 'hero-mountains.jpg', width: 1920, height: 1080, text: 'Trinity County Mountains' },
  { name: 'about-hero.jpg', width: 1920, height: 1080, text: 'About Our Farm' },
  { name: 'process-hero.jpg', width: 1920, height: 1080, text: 'Our Growing Process' },
  { name: 'harvest-hero.jpg', width: 1920, height: 1080, text: 'Current Harvest' },
  { name: 'contact-hero.jpg', width: 1920, height: 1080, text: 'Get In Touch' },
  { name: 'elias-thorne.jpg', width: 800, height: 1000, text: 'Elias Thorne' },
  { name: 'living-soil.jpg', width: 1200, height: 800, text: 'Living Soil' },
  { name: 'sun-grown.jpg', width: 1200, height: 800, text: 'Sun-Grown Cannabis' },
  { name: 'hand-trim.jpg', width: 1200, height: 800, text: 'Hand Trimming' },
];

function createSVGPlaceholder(width, height, text) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="#3c6341"/>
  <text x="${width/2}" y="${height/2}" font-family="Arial, sans-serif" font-size="36" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;
}

placeholders.forEach(({ name, width, height, text }) => {
  const filePath = path.join(imagesDir, name);
  const svg = createSVGPlaceholder(width, height, text);

  // For now, create as SVG files (you can rename to .jpg later or use actual images)
  const svgPath = filePath.replace('.jpg', '.svg');
  fs.writeFileSync(svgPath, svg);
  console.log(`✓ Created ${svgPath}`);

  // Also create a .jpg version as a copy
  fs.writeFileSync(filePath, svg);
  console.log(`✓ Created ${filePath}`);
});

console.log('\n✨ All placeholder images created!');
console.log('Note: Replace these with actual images for production use.');
