import styled from "styled-components";

export const StyledSoundTile = styled.div`
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

  img {
    width: 64px;
    height: 64px;
  }

  span {
    font-weight: bold;
    color: black;
    transition: all 0.3 ease;
    user-select: none;
  }

  &:active {
    filter: brightness(55%);
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
