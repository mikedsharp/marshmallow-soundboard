import { Server } from "socket.io";
import { SoundCache } from "./SoundCache";
import { allowedMediaFormats } from "./soundFormats";
import { buildManifest } from "./build-manifest";

const ip = require("ip");
const fs = require("fs");
const path = require("path");
const express = require("express");
const qrcode = require("qrcode-terminal");
const symphonia = require("@tropicbliss/symphonia");
const chokidar = require("chokidar");

const app = express();
const directory = process.cwd();
const soundCache = new SoundCache();

let serverConfig = {
  ...JSON.parse(fs.readFileSync(path.join(directory, `server-config.json`))),
};

const serverPort: number = serverConfig.serverPort;
const clientPort: number = serverConfig.clientPort;
const thumbPort: number = serverConfig.thumbnailPort;

const io = new Server(serverPort, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  },
});

buildManifest();

const mediaFileGlob = `/media/*.(${allowedMediaFormats.join("|")})`;

let clientDirectory: string = "";

if (process.pkg) {
  // runtime is compiled with pkg
  clientDirectory = process.cwd();
} else {
  // runtime is not compiled with pkg
  clientDirectory = "../soundboard-client/dist";
}

let soundManifest = JSON.parse(
  fs.readFileSync(path.join(directory, `/media/sound-manifest.json`))
);

soundCache.populate(soundManifest.sounds, directory);

chokidar
  .watch(path.join(directory, mediaFileGlob), {
    ignoreInitial: true,
  })
  .on("add", (soundPath: string) => {
    const slashCharacter = soundPath.indexOf("\\") > -1 ? "\\" : "/";
    soundManifest = JSON.parse(
      fs.readFileSync(path.join(directory, `/media/sound-manifest.json`))
    );
    soundManifest.sounds.push({
      name: soundPath.substring(
        soundPath.lastIndexOf(slashCharacter) + 1,
        soundPath.lastIndexOf(".")
      ),
      label: soundPath.substring(
        soundPath.lastIndexOf(slashCharacter) + 1,
        soundPath.lastIndexOf(".")
      ),
      format: soundPath.substring(soundPath.lastIndexOf(".") + 1),
      color: "#777",
    });
    fs.writeFileSync(
      path.join(directory, "/media/sound-manifest.json"),
      JSON.stringify(soundManifest)
    );
  });

chokidar
  .watch(path.join(directory, mediaFileGlob), {
    ignoreInitial: true,
  })
  .on("unlink", (soundPath: string) => {
    const slashCharacter = soundPath.indexOf("\\") > -1 ? "\\" : "/";
    soundManifest = JSON.parse(
      fs.readFileSync(path.join(directory, `/media/sound-manifest.json`))
    );
    soundManifest.sounds.splice(
      soundManifest.sounds.findIndex((sound: any) => {
        return (
          sound.name ===
          soundPath.substring(
            soundPath.lastIndexOf(slashCharacter) + 1,
            soundPath.lastIndexOf(".")
          )
        );
      }),
      1
    );
    fs.writeFileSync(
      path.join(directory, "/media/sound-manifest.json"),
      JSON.stringify(soundManifest)
    );
  });

fs.watchFile(
  path.join(directory, "/media/sound-manifest.json"),
  (curr: any, previous: any) => {
    soundManifest = JSON.parse(
      fs.readFileSync(path.join(directory, `/media/sound-manifest.json`))
    );
    soundCache.populate(soundManifest.sounds, directory);
    io.emit("get-sounds", soundManifest.sounds);
  }
);

io.on("connection", (socket) => {
  socket.emit("get-sounds", soundManifest.sounds);
  socket.on("play-sound", async (requestedSound) => {
    const soundObject = JSON.parse(requestedSound);
    symphonia.playFromBuf(
      soundCache.getCachedSoundByKey(
        `${soundObject.name}:${soundObject.format}`,
        directory
      ),
      { speed: 1.0, volume: 1.0, isBlocking: false }
    );
  });
  socket.on("request-sounds", () => {
    socket.emit("get-sounds", soundManifest.sounds);
  });
});

if (fs.existsSync(path.join(clientDirectory, `/index.html`))) {
  console.log(
    `Soundboard client build exists, attempting to host on port ${clientPort}...`
  );
  fs.writeFileSync(
    path.join(clientDirectory, `/server-address.js`),
    `
        var serverAddress = 'ws://${ip.address()}:${serverPort}';
    `
  );

  app.use(
    express.static(path.join(clientDirectory, `/`), {
      port: clientPort,
    })
  );
  app.use(express.static(path.join(directory, "media/thumbs")));
  app.listen(clientPort);
  app.listen(thumbPort);
  console.log(
    `soundboard client is hosted at: http://${ip.address()}:${clientPort}`
  );
  console.log(`you can also scan the QR if you don't like typing...`);
  qrcode.generate(`http://${ip.address()}:${clientPort}`, { small: true });
} else {
  app.use(express.static(path.join(directory, "media/thumbs")));
  app.listen(thumbPort);
  console.log(
    `No build of soundboard client found, please run soundboard-client separately (adding VITE_SOUND_SERVER_ADDRESS=ws://${ip.address()}:${serverPort} to the clients .env file)  or run a build and then restart this process.`
  );
}
