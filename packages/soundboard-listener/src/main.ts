import { Server } from "socket.io";
import { SoundCache } from "./SoundCache";

const ip = require("ip");
const fs = require('fs');
const path = require("path");
const express = require("express");
const symphonia = require('@tropicbliss/symphonia');
const qrcode = require('qrcode-terminal');

const app = express();
const serverPort: number = 3000;
const clientPort: number = 5001;
const directory = process.cwd();
const soundCache = new SoundCache();
const io = new Server(serverPort, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  },
});

let clientDirectory: string = "";

if (process.pkg) {
  // runtime is compiled with pkg
  clientDirectory = process.cwd();
} else {
  // runtime is not compiled with pkg
  clientDirectory = "../soundboard-client/dist";
}

console.log(`soundboard listener is listening on port ${serverPort}`);

const soundManifest = JSON.parse(
  fs.readFileSync(path.join(directory, `/media/sound-manifest.json`))
);

soundCache.populate(soundManifest.sounds, directory);

io.on("connection", (socket) => {
  socket.emit("get-sounds", soundManifest.sounds);
  socket.on("play-sound", async (requestedSound) => {
    const soundObject = JSON.parse(requestedSound);
    symphonia.playFromBuf(soundCache.getCachedSoundByKey(soundObject.name, directory), { speed: 1.0, volume: 1.0, isBlocking: false })
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
  app.listen(clientPort);
  console.log(
    `soundboard client is hosted at: http://${ip.address()}:${clientPort}`
  );
  console.log(`you can also scan the QR if you don't like typing...`);
  qrcode.generate(`http://${ip.address()}:${clientPort}`, {small: true});

} else {
  console.log(
    `No build of soundboard client found, please run soundboard-client separately (adding VITE_SOUND_SERVER_ADDRESS=ws://${ip.address()}:${serverPort} to the clients .env file)  or run a build and then restart this process.`
  );
}
