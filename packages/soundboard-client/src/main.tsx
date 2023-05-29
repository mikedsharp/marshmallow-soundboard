import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { init } from "./services/ListenerConnection.ts";

// set up socket.io connection
const socket = init();
socket.on("get-sounds", (sounds: any) => {
  localStorage.setItem("sounds", JSON.stringify(sounds));
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
