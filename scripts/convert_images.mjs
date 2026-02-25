import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');

async function convertImages() {
    console.log('Starting image conversion to WebP...');

    const files = fs.readdirSync(publicDir);

    for (const file of files) {
        if (file.match(/\.(png|jpg|jpeg)$/i)) {
            const inputPath = path.join(publicDir, file);
            const outputPath = path.join(publicDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));

            try {
                await sharp(inputPath)
                    .webp({ quality: 80 })
                    .toFile(outputPath);

                console.log(`Converted: ${file} -> ${path.basename(outputPath)}`);
            } catch (err) {
                console.error(`Error converting ${file}:`, err);
            }
        }
    }

    console.log('Image conversion complete.');
}

convertImages();
