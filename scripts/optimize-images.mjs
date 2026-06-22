import sharp from "sharp";

const input = "public/images/ZOI_Villa_Residence.webp";

for (const width of [480, 768, 1024, 1440]) {
  await sharp(input)
    .resize({ width })
    .webp({ quality: 72 })
    .toFile(`public/images/ZOI_Villa_Residence-${width}.webp`);

  console.log(`Generated ${width}px version`);
}
