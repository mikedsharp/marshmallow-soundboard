import SoundTile from "./SoundTile";
import { StyledSoundBoardGrid } from "./styles/SoundBoardGrid";
import { playSound } from "../services/ListenerConnection";

function SoundBoardGrid(props: {sounds: any[] }) {
  function tileClicked(tile: any) {
    playSound(tile);
  }

  return (
    <>
      <StyledSoundBoardGrid>
        {props.sounds.map((sound) => {
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
