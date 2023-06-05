const express = require("express");
const app = express();
const serverPort: number = 3000;
const clientPort: number = 5001;

import { Server } from "socket.io";
var ip = require("ip");
const fs = require("fs");
const path = require("path");
const sound = require("sound-play");

// pkg gets your working directory wrong if you use process.cwd() when the app is compiled, so let's test for the bad directory name and use
// an alternative if we get a positive result.
const directory = __dirname.indexOf('/snapshot') > -1 ? process.execPath : __dirname;

const io = new Server(serverPort, {
  cors: {
    origin: '*',
    methods: ["GET", "POST", "OPTIONS"],
  },
});

console.log(`soundboard listener is listening on port ${serverPort}`);

io.on("connection", (socket) => {
  const soundManifest = JSON.parse(
    fs.readFileSync(path.join(directory, `../media/sound-manifest.json`))
  );
  socket.emit("get-sounds", soundManifest.sounds);
  socket.on("play-sound", async (requestedSound) => {
    const soundObject = JSON.parse(requestedSound);
    const filePath = path.join(directory, `../media/${soundObject.name}.mp3`);
    sound.play(filePath);
  });
});

console.log(path.join(directory, "../../soundboard-client/dist/server-address.js"));

if (
  fs.existsSync(path.join(directory, "../../soundboard-client/dist/index.html"))
) {
  console.log(
    `Soundboard client build exists, attempting to host on port ${clientPort}...`
  );
  fs.writeFileSync(

    path.join(directory, "../../soundboard-client/dist/server-address.js"),
    `
        var serverAddress = 'http://${ip.address()}:${serverPort}';
    `
  );

  app.use(
    express.static(path.join(directory, "../../soundboard-client/dist"), {
      port: clientPort,
    })
  );
  app.listen(clientPort);
  console.log(
    `soundboard client is hosted at: http://${ip.address()}:${clientPort}`
  );
} else {
  console.log(
    `No build of soundboard client found, please run soundboard-client separately (adding VITE_SOUND_SERVER_ADDRESS=http://${ip.address()}:${clientPort} to the clients .env file)  or run a build and then restart this process.`
  );
}
