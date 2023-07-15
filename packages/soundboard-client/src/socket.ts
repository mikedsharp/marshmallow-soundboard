declare var serverAddress: any;

import { io } from "socket.io-client";

function init() {
  let socket:any = null;

  try {
    if (serverAddress) {
      socket = io(serverAddress);
    } else {
      socket = io(import.meta.env.VITE_SOUND_SERVER_ADDRESS);
    }
  } catch (ex) {
    socket = io(import.meta.env.VITE_SOUND_SERVER_ADDRESS);
  }
  return socket;
}

export const socket:any = init();