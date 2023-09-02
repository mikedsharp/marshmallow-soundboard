const fs = require("fs");
const path = require("path");

console.log("building manifest...");

const soundEntries: { name: any; format: any; label: any; color: string }[] =
  [];
const allowedExtensions = ["wav", "mp3", "ogg", "mp4", "flac"];

const directory = process.cwd();

const isValidFileFormat = (extension: string): boolean => {
  return allowedExtensions.includes(extension);
};

if (!fs.existsSync(path.join(directory, `/media/sound-manifest.json`))) {
  fs.writeFileSync(
    path.join(directory, `/media/sound-manifest.json`),
    JSON.stringify({
      sounds: [],
    })
  );
}

fs.readdirSync(path.join(directory, `/media/`)).forEach((file: any) => {
  const filenameParts = file.split(".");
  const extension = filenameParts[filenameParts.length - 1];
  if (isValidFileFormat(extension)) {
    soundEntries.push({
      name: filenameParts.slice(0, filenameParts.length - 1).join("."),
      format: extension,
      label: filenameParts.slice(0, filenameParts.length - 1).join("."),
      color: "#777",
    });
  }
});
console.log(JSON.stringify({ sounds: soundEntries }));
fs.writeFileSync(
  path.join(directory, `/media/sound-manifest.json`),
  JSON.stringify({ sounds: soundEntries })
);
console.log(
  'A basic manifest for your sounds has been generated, if you want to customise further, see "sound-manifest.json" in the "media" folder.'
);
