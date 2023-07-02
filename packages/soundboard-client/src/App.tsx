import SoundBoardGrid from "./components/SoundBoardGrid";
import {StyledApp} from './components/styles/App';
import { useState, useLayoutEffect, useEffect } from "react";


function useGridSize() {
  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
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

function App() {
  const soundString: string = localStorage.getItem("sounds") || "";
  const sounds = JSON.parse(soundString);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
 
  useEffect(() => {
    window.addEventListener("resize", () => {
      setCurrentPageIndex(0);
    }, false);
  }, []);
  


  const [width, height] = useGridSize();

  const maxTilesAcross: number = Math.floor(width / 150);
  const maxTilesDown: number = Math.floor(height / 150);

  const maxTotalTiles: number = maxTilesAcross * maxTilesDown;

  const startTileIndex:number = maxTotalTiles * currentPageIndex;

  const totalPageCount:number = Math.ceil(sounds.length/(maxTilesAcross * maxTilesDown));
  const page = sounds.slice(startTileIndex, startTileIndex + maxTotalTiles);
  
  return <>
    <StyledApp>
      <SoundBoardGrid sounds={page} />;
      <div>
        <span>{currentPageIndex}</span>
        <button disabled={currentPageIndex === 0} onClick={() => setCurrentPageIndex(currentPageIndex - 1)} type="button">Previous page</button>
        <button disabled={currentPageIndex === totalPageCount - 1} onClick={() => setCurrentPageIndex(currentPageIndex + 1)} type="button">Next page</button>
      </div>
    </StyledApp>
  </>
}

export default App;
