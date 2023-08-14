import styled from "styled-components";

export const StyledSoundTile = styled.div`
  user-select: none;
  height: 150px;
  aspect-ratio: 1/1;
  .button {
    background-color: ${({ color }) => color};
    display: flex;
    height: 150px;
    box-sizing: border-box;
    aspect-ratio: 1/1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 6%;
    transition: all 0.3s ease;
    box-shadow: 0 9px #999;
    filter: contrast(70%);
    cursor: pointer;
    &:active {
      filter: brightness(55%);
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }
  }

  img {
    flex: 1;
    aspect-ratio: 1/1;
    height: 70%;
    border-radius: 6%;
    margin: 8px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  span {
    font-weight: bold;
    color: black;
    background-color: white;
    padding: 4px 2px;
    transition: all 0.3 ease;
    font-family: 'Permanent Marker';
    width: 100%;
    box-sizing: border-box;
    border-radius: 6%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    overflow-wrap: anywhere;
    word-break: break-all;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    -webkit-touch-callout: none;
    -ms-text-size-adjust: none;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }


`;
