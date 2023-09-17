import styled from "styled-components";

export const StyledPaginationControls = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  span {
    color: #fff;
    padding: 5px 10px;
    margin: 0 10px;
    border: 2px solid #fff;
    -webkit-text-stroke: 1px black;
    font-family: "Erica One", cursive;
    font-size: 16px;
    border-radius: 4px;
  }
  button {
    font-family: "Erica One", cursive;
    border-radius: 4px;
    -webkit-text-stroke: 1px black;
    color: #fff;
    border: 2px solid #fff;
    cursor: pointer;
    font-size: 16px;
    background-color: slategrey;
  }
  button:disabled {
    background-color: slategrey;
    color: slategrey;
    -webkit-text-stroke: 1px black;
    border: 2px solid black;
  }
`;
