declare var process: { pkg: { [key: string]: string }; cwd: any };
const express = require("express");
const symphonia = require('@tropicbliss/symphonia')
const app = express();
const serverPort: number = 3000;
const clientPort: number = 5001;

import { Server } from "socket.io";
var ip = require("ip");
const fs = require("fs");
const path = require("path");

let clientDirectory: string = "";

const directory = process.cwd();

if (process.pkg) {
  // runtime is compiled with pkg
  clientDirectory = process.cwd();
} else {
  // runtime is not compiled with pkg
  clientDirectory = "../soundboard-client/dist";
}

const io = new Server(serverPort, {
  cors: {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
  },
});

console.log(`soundboard listener is listening on port ${serverPort}`);

io.on("connection", (socket) => {
  const soundManifest = JSON.parse(
    fs.readFileSync(path.join(directory, `/media/sound-manifest.json`))
  );
  socket.emit("get-sounds", soundManifest.sounds);
  socket.on("play-sound", async (requestedSound) => {
    const soundObject = JSON.parse(requestedSound);
    const filePath = path.join(directory, `/media/${soundObject.name}.mp3`);
    const buf = fs.readFileSync(filePath) // Gets a Buffer
    symphonia.playFromBuf(buf, { speed: 1.0, volume: 1.0, isBlocking: false })
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
} else {
  console.log(
    `No build of soundboard client found, please run soundboard-client separately (adding VITE_SOUND_SERVER_ADDRESS=ws://${ip.address()}:${serverPort} to the clients .env file)  or run a build and then restart this process.`
  );
}
