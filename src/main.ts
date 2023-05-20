import { Server } from "socket.io";

const io = new Server(3000, {
  cors: {
    origin: "*",
  },
});
console.log("listening on port 3000");
debugger;
io.on("connection", (socket) => {
  socket.emit("get-sounds", [
    {
      name: "doh",
      label: "doh!",
      color: "#f00",
    },
    {
      name: "woohoo",
      label: "woohoo!",
      color: "#0f0",
    },
    {
      name: "legrille",
      label: "Le grille?!?!",
      color: "#00f",
    },
    {
      name: "doh",
      label: "doh!",
      color: "#f00",
    },
    {
      name: "woohoo",
      label: "woohoo!",
      color: "#0f0",
    },
    {
      name: "legrille",
      label: "Le grille?!?!",
      color: "#00f",
    },
    {
      name: "doh",
      label: "doh!",
      color: "#f00",
    },
    {
      name: "woohoo",
      label: "woohoo!",
      color: "#0f0",
    },
    {
      name: "legrille",
      label: "Le grille?!?!",
      color: "#00f",
    },
    {
      name: "doh",
      label: "doh!",
      color: "#f00",
    },
    {
      name: "woohoo",
      label: "woohoo!",
      color: "#0f0",
    },
    {
      name: "legrille",
      label: "Le grille?!?!",
      color: "#00f",
    },
    {
      name: "doh",
      label: "doh!",
      color: "#f00",
    },
    {
      name: "woohoo",
      label: "woohoo!",
      color: "#0f0",
    },
    {
      name: "legrille",
      label: "Le grille?!?!",
      color: "#00f",
    },
    {
      name: "doh",
      label: "doh!",
      color: "#f00",
    },
    {
      name: "woohoo",
      label: "woohoo!",
      color: "#0f0",
    },
    {
      name: "legrille",
      label: "Le grille?!?!",
      color: "#00f",
    },
    {
      name: "legrille",
      label: "Le grille?!?!",
      color: "#00f",
    },
    {
      name: "doh",
      label: "doh!",
      color: "#f00",
    },
    {
      name: "woohoo",
      label: "woohoo!",
      color: "#0f0",
    },
    {
      name: "legrille",
      label: "Le grille?!?!",
      color: "#00f",
    },
    {
      name: "legrille",
      label: "Le grille?!?!",
      color: "#00f",
    },
    {
      name: "woohoo",
      label: "woohoo!",
      color: "#0f0",
    },
  ]);
});
