const fsPromises = require("node:fs/promises");
const fs = require("fs");
const path = require("path");

export class SoundCache {
  private _soundCache: any = {};

  public populate(sounds: any, baseDirectory: string) {
    for (let sound of sounds) {
      const filePath = path.join(
        baseDirectory,
        `/media/${sound.name}.${sound.format}`
      );
      fsPromises.readFile(filePath).then((file: any) => {
        this._soundCache[sound.name] = file;
      });
    }
  }

  public getCachedSoundByKey(key: string, baseDirectory: string) {
    if (!this._soundCache[key]) {
      const filePath = path.join(
        baseDirectory,
        `/media/${key.split(":")[0]}.${key.split(":")[1]}`
      );
      const soundFile = fs.readFileSync(filePath);
      this._soundCache[key] = soundFile;
    }
    return this._soundCache[key];
  }
}
