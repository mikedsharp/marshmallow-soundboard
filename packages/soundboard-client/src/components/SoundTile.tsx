import { StyledSoundTile } from "./styles/SoundTile";
import { useState } from "react";
function SoundTile(props: any) {

  const [imageHasError, setImageHasError] = useState(false);

  const onImageError = () => {
    setImageHasError(true);
  }

  return (
    <StyledSoundTile
      onClick={() => props.onTileClick(props.sound)}
      color={props.sound.color}
    >
      <div className="button">
        {!imageHasError && props.sound.image && <img  draggable="false" src={`./${props.sound.image}`} onError={onImageError} />}
        {props.sound.label && <span>{props.sound.label}</span>}
      </div>

    </StyledSoundTile>
  );
}

export default SoundTile;
