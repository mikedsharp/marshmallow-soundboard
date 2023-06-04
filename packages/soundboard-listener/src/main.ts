const express = require("express");
const app = express();
const serverPort: number = 3000;
const clientPort: number = 5000;

import { Server } from "socket.io";
var ip = require("ip");
const fs = require("fs");
const path = require("path");
const sound = require("sound-play");

const io = new Server(3000, {
  cors: {
    origin: [
      `http://${ip.address()}:${clientPort}`,
      `http://localhost:${clientPort}`,
    ],
    methods: ["GET", "POST", "OPTIONS"],
  },
});

console.log(`soundboard listener is listening on port ${serverPort}`);

io.on("connection", (socket) => {
  const soundManifest = JSON.parse(
    fs.readFileSync(path.join(__dirname, `../media/sound-manifest.json`))
  );
  socket.emit("get-sounds", soundManifest.sounds);
  socket.on("play-sound", async (requestedSound) => {
    const soundObject = JSON.parse(requestedSound);
    const filePath = path.join(__dirname, `../media/${soundObject.name}.mp3`);
    sound.play(filePath);
  });
});

if (
  fs.existsSync(path.join(__dirname, "../../soundboard-client/dist/index.html"))
) {
  console.log(
    `Soundboard client build exists, attempting to host on port ${clientPort}...`
  );
  fs.writeFileSync(
    path.join(__dirname, "../../soundboard-client/dist/server-address.js"),
    `
        var serverAddress = 'http://${ip.address()}:${serverPort}';
    `
  );

  app.use(
    express.static(path.join(__dirname, "../../soundboard-client/dist"), {
      port: clientPort,
    })
  );

  app.get("*", function (request: any, response: any) {
    response.sendFile(
      path.join(__dirname, "../../soundboard-client/dist/index.html")
    );
  });
  app.listen(clientPort);
  console.log(
    `soundboard client is hosted at: http://${ip.address()}:${clientPort}`
  );
} else {
  console.log(
    `No build of soundboard client found, please run soundboard-client separately (adding VITE_SOUND_SERVER_ADDRESS=http://${ip.address()}:${clientPort} to the clients .env file)  or run a build restart this process.`
  );
}
