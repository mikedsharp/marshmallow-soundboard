import { allowedMediaFormats } from "./soundFormats";
const fs = require("fs");
const path = require("path");

export function buildManifest() {
  console.log("building manifest...");

  const soundEntries: { name: any; format: any; label: any; color: string }[] =
    [];
  const directory = process.cwd();
  const isValidFileFormat = (extension: string): boolean => {
    return allowedMediaFormats.includes(extension);
  };

  const hasNoExistingRecord = (sound: any): boolean => {
    const matchingSounds = soundEntries.filter((soundEntry) => {
      return (
        soundEntry.name === sound.name &&
        soundEntry.format === soundEntry.format
      );
    });
    return matchingSounds.length === 0;
  };

  if (!fs.existsSync(path.join(directory, `/media/sound-manifest.json`))) {
    fs.writeFileSync(
      path.join(directory, `/media/sound-manifest.json`),
      JSON.stringify({
        sounds: [],
      })
    );
  } else {
    const manifestFile = JSON.parse(
      fs.readFileSync(path.join(directory, `/media/sound-manifest.json`))
    );
    soundEntries.push(...manifestFile.sounds);
  }

  fs.readdirSync(path.join(directory, `/media/`)).forEach((file: any) => {
    const filenameParts = file.split(".");
    const extension = filenameParts[filenameParts.length - 1];
    const newSound = {
      name: filenameParts.slice(0, filenameParts.length - 1).join("."),
      format: extension,
      label: filenameParts.slice(0, filenameParts.length - 1).join("."),
      color: "#777",
    };
    if (isValidFileFormat(extension) && hasNoExistingRecord(newSound)) {
      soundEntries.push(newSound);
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
}
