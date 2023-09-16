import { useState, useEffect, useCallback } from "react";
import { socket } from "./socket";
import SoundBoardGrid from "./components/SoundBoardGrid";
import { StyledApp } from "./components/styles/App";
import PaginationControls from "./components/PaginationControls";
import { useGridSize } from "./hooks/useGridSize";

function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [sounds, setSounds] = useState<any[]>([]);
  const [fetchedInitialSounds, setFetchedInitialSounds] =
    useState<boolean>(false);

  function onGetSounds(newSounds: any[]) {
    setSounds(newSounds);
    setFetchedInitialSounds(true);
  }

  useEffect(() => {
    socket.on("get-sounds", onGetSounds);
    // Safari desktop doesn't return initial sounds on load, so this requests them again
    setTimeout(() => {
      if (!fetchedInitialSounds) {
        socket.emit("request-sounds");
      }
    }, 500);
    return () => {
      socket.off("get-sounds");
    };
  });

  useEffect(() => {
    const listenerFn = () => {
      setCurrentPageIndex(0);
    };
    window.addEventListener("resize", listenerFn, false);

    return () => {
      window.removeEventListener("resize", listenerFn);
    };
  }, []);

  const [width, height] = useGridSize();

  const maxTilesAcross: number = Math.floor(width / 150);
  const maxTilesDown: number = Math.floor(height / 150);

  const maxTotalTiles: number = maxTilesAcross * maxTilesDown;

  const startTileIndex: number = maxTotalTiles * currentPageIndex;

  const totalPageCount: number = Math.ceil(
    sounds.length / (maxTilesAcross * maxTilesDown)
  );
  const page = sounds.slice(startTileIndex, startTileIndex + maxTotalTiles);

  return (
    <>
      <StyledApp>
        <h1>Marshmallow soundboard</h1>
        <h2>Make some noise!</h2>
        <div style={{ display: "flex", flex: 1 }}>
          <SoundBoardGrid
            sounds={page}
            onPlaySound={useCallback((sound: any) => {
              socket.emit("play-sound", JSON.stringify(sound));
            }, [])}
          />
        </div>
        <PaginationControls
          onPreviousPage={() => {
            setCurrentPageIndex(currentPageIndex - 1);
          }}
          onNextPage={() => {
            setCurrentPageIndex(currentPageIndex + 1);
          }}
          totalPageCount={totalPageCount}
          currentPageIndex={currentPageIndex}
        />
      </StyledApp>
    </>
  );
}

export default App;
