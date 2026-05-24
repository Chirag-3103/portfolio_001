const sharp = require('sharp');
const fs = require('fs');

(async () => {
  try {
    const input = 'public/favc1.jpg';
    const output = 'public/favicon.png';
    const size = 512;

    if (!fs.existsSync(input)) {
      console.error('Input file not found:', input);
      process.exit(1);
    }

    const imgBuffer = await sharp(input)
      .resize(size, size, { fit: 'cover', position: 'centre' })
      .toBuffer();

    const svg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg"><circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="#fff"/></svg>`;

    const mask = await sharp(Buffer.from(svg)).png().toBuffer();

    await sharp(imgBuffer)
      .composite([{ input: mask, blend: 'dest-in' }])
      .png()
      .toFile(output);

    console.log('Saved', output);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
