import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const buf = fs.readFileSync('/home/z/my-project/public/qfs-card-pro.png');
const b64 = buf.toString('base64');
const dataUrl = `data:image/png;base64,${b64}`;

const zai = await ZAI.create();
const response = await zai.images.generations.edit({
  prompt: 'Remove the dark background completely making it transparent. Keep only the metallic silver payment card with all details intact - QFSpay text, card number, chip, gold QFS coin, circuit patterns. The card floats with zero background.',
  images: [{ url: dataUrl }],
  size: '1440x720'
});

const outBase64 = response.data[0].base64;
const outBuf = Buffer.from(outBase64, 'base64');
fs.writeFileSync('/home/z/my-project/public/qfs-card-nobg.png', outBuf);
console.log('Done! Saved qfs-card-nobg.png');
