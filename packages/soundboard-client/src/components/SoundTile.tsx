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
      {!imageHasError && props.sound.image && <img src={`./${props.sound.image}`}  onError={onImageError}/>}
      {props.sound.label && <span>{props.sound.label}</span>}
    </StyledSoundTile>
  );
}

export default SoundTile;
