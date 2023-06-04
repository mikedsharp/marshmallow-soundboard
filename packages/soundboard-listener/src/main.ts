const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
import { Server } from "socket.io";
var ip = require("ip");
const fs = require("fs");
const path = require("path");
const sound = require("sound-play");
const soundCache: any = {};

const io = new Server(3000, {
  cors: {
    origin: "*",
  },
});
console.log("soundboard listener is listening on port 3000");

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
    "Soundboard client build exists, attempting to host on port 3000..."
  );
  fs.writeFileSync(
    path.join(__dirname, "../../soundboard-client/dist/server-address.js"),
    `
        var serverAddress = 'http://${ip.address()}:3000';
    `
  );

  app.use(
    express.static(path.join(__dirname, "../../soundboard-client/dist"), {
      port: 5000,
    })
  );

  app.get("*", function (request: any, response: any) {
    response.sendFile(
      path.join(__dirname, "../../soundboard-client/dist/index.html")
    );
  });
  app.listen(5000);
  console.log(`soundboard client is hosted at: http://${ip.address()}:5000`);
} else {
  console.log(
    `No build of soundboard client found, please run soundboard-client separately (adding VITE_SOUND_SERVER_ADDRESS=http://${ip.address()}:5000 to the clients .env file)  or run a build restart this process.`
  );
}
