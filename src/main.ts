import { Server } from "socket.io";
const fs = require("fs");
const player = require("sound-play");
const path = require("path");

const io = new Server(3000, {
  cors: {
    origin: "*",
  },
});
console.log("listening on port 3000");
io.on("connection", (socket) => {
  const soundManifest = JSON.parse(
    fs.readFileSync(path.join(__dirname, `../media/sound-manifest.json`))
  );
  socket.emit("get-sounds", soundManifest.sounds);
  socket.on("play-sound", (sound) => {
    console.log("play requested sound:", JSON.parse(sound));
    const soundObject = JSON.parse(sound);
    const filePath = path.join(__dirname, `../media/${soundObject.name}.mp3`);
    player.play(filePath);
  });
});
