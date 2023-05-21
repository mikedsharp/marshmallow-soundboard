const fs = require("fs");
const path = require("path");

console.log("building manifest...");

const soundEntries: { name: any; label: any; color: string }[] = [];

fs.readdirSync(path.join(__dirname, `../media/`)).forEach((file: any) => {
  if (file.indexOf(".mp3") > -1) {
    soundEntries.push({
      name: file.split(".")[0],
      label: file.split(".")[0],
      color: "#777",
    });
  }
});
console.log(JSON.stringify({ sounds: soundEntries }));
fs.writeFileSync(
  path.join(__dirname, `../media/sound-manifest.json`),
  JSON.stringify({ sounds: soundEntries })
);
console.log(
  'A basic manifest for your sounds has been generated, if you want to customise further, see "sound-manifest.json" in the "media" folder.'
);
