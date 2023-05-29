import SoundTile from "./SoundTile";
import { StyledSoundBoardGrid } from "./styles/SoundBoardGrid";
import { playSound } from "../services/ListenerConnection";

function tileClicked(tile: any) {
  playSound(tile);
}

function SoundBoardGrid(props: { sounds: any[] }) {
  return (
    <StyledSoundBoardGrid>
      {props.sounds.map((sound) => {
        return (
          <SoundTile key={sound.name} onTileClick={tileClicked} sound={sound} />
        );
      })}
    </StyledSoundBoardGrid>
  );
}

export default SoundBoardGrid;
