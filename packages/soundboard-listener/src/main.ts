const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
import { Server } from "socket.io";
var ip = require("ip");
const fs = require("fs");
const path = require("path");
const chalk = require("chalk");
const play = require("audio-play");
const load = require("audio-loader");
const soundCache: any = {};

const io = new Server(3000, {
  cors: {
    origin: "*",
  },
});
console.log("listening on port 3000");
// console.log(
//   chalk.red(
//     `Before you run the 'soundboard-client' project, please add the environment variable below to your .env file`
//   )
// );
// console.log(
//   chalk.green(`VITE_SOUND_SERVER_ADDRESS=http://${ip.address()}:3000`)
// );
// console.log(
//   chalk.yellow(
//     "^^^This is the the address the client will use on your local network to talk to this app to listen for soundboard sound requests"
//   )
// );

function buildAudioCache(manifest: any) {
  manifest.sounds.forEach((sound: any) => {
    soundCache[sound.name] = load(
      path.join(__dirname, `../media/${sound.name}.mp3`)
    );
  });
}

io.on("connection", (socket) => {
  const soundManifest = JSON.parse(
    fs.readFileSync(path.join(__dirname, `../media/sound-manifest.json`))
  );
  buildAudioCache(soundManifest);
  socket.emit("get-sounds", soundManifest.sounds);
  socket.on("play-sound", async (sound) => {
    console.log("play requested sound:", JSON.parse(sound));
    const soundObject = JSON.parse(sound);

    if (soundCache[soundObject.name]) {
      play(await soundCache[soundObject.name]);
    } else {
      const filePath = path.join(__dirname, `../media/${soundObject.name}.mp3`);
      console.log(filePath);
      load(filePath).then(play);
    }
  });
});

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
