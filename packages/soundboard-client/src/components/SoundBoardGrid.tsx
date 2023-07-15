import SoundTile from "./SoundTile";
import { StyledSoundBoardGrid } from "./styles/SoundBoardGrid";

function SoundBoardGrid(props: { sounds: any[], onPlaySound: Function }) {
  const { sounds, onPlaySound } = props;
  function tileClicked(tile: any) {
    onPlaySound(tile);
  }

  return (
    <>
      <StyledSoundBoardGrid>
        {sounds.map((sound) => {
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
