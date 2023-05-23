import { Server } from "socket.io";
var ip = require('ip');
const fs = require("fs");
const player = require("sound-play");
const path = require("path");
import chalk  from 'chalk';
const io = new Server(3000, {
  cors: {
    origin: "*",
  },
});
console.log("listening on port 3000");
console.log(chalk.red(`Before you run the 'soundboard-client' project, please add the environment variable below to your .env file`));
console.log(chalk.green(`VITE_SOUND_SERVER_ADDRESS=http://${ip.address()}:3000`))
console.log(chalk.yellow('^^^This is the the address the client will use on your local network to talk to this app to listen for soundboard sound requests'))
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
