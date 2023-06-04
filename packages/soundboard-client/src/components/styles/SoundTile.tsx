import styled from "styled-components";

export const StyledSoundTile = styled.div`
  background-color: ${({ color }) => color};
  display: flex;
  height: 150px;
  box-sizing: border-box;
  aspect-ratio: 1/1;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  filter: contrast(70%);
  cursor: pointer;

  span {
    font-weight: bold;
    color: black;
    transition: all 0.3 ease;
    user-select: none;
  }

  &:hover {
    filter: contrast(85%);
  }

  &:active {
    filter: contrast(100%);
    span {
      transform: scale(2);
    }
  }
`;
