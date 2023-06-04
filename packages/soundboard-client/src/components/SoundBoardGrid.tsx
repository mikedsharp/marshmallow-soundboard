import SoundTile from "./SoundTile";
import { StyledSoundBoardGrid } from "./styles/SoundBoardGrid";
import { playSound } from "../services/ListenerConnection";
import { useState, useLayoutEffect, useRef } from "react";

function useGridSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      const grid: any = document.getElementById("root");
      setSize([grid.offsetWidth - 50, grid.offsetHeight - 50]);
    }
    window.addEventListener("resize", updateSize);

    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

function SoundBoardGrid(props: { sounds: any[] }) {
  function tileClicked(tile: any) {
    playSound(tile);
  }

  const gridElement: any = useRef();
  const [width, height] = useGridSize();

  const maxTilesAcross: number = Math.floor(width / 150);
  const maxTilesDown: number = Math.floor(height / 150);

  const maxTotalTiles: number = maxTilesAcross * maxTilesDown;

  const page = props.sounds.slice(0, maxTotalTiles);

  return (
    <>
      <StyledSoundBoardGrid ref={gridElement}>
        {page.map((sound) => {
          return (
            <SoundTile
              key={Math.random()}
              onTileClick={tileClicked}
              sound={sound}
            />
          );
        })}
      </StyledSoundBoardGrid>
    </>
  );
}

export default SoundBoardGrid;
