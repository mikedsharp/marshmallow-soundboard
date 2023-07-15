import { useState, useEffect } from "react";
import { socket } from './socket';
import SoundBoardGrid from "./components/SoundBoardGrid";

function App() {
  const [sounds, setSounds] = useState<any[]>([]);
  function onGetSounds(newSounds:any[]) {
    setSounds(newSounds);
  }
  useEffect(() => {
    socket.on('get-sounds', onGetSounds);
    return () => {
      socket.off('get-sounds');
    }
  })
  return <SoundBoardGrid sounds={sounds} onPlaySound={(sound:any) => {
    socket.emit('play-sound', JSON.stringify(sound));
  }} />;
}

export default App;
