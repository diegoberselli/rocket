import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* justify-content: space-evenly; */
  width: 100%;
/* 
  .buttons{
    display: flex;
    justify-content: space-between;

  } */

  .tipos{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

`;

export const StyledButton = styled.button `
  height: 40px;
  background-color:var(--grey-1);
  color: #FF577F;
  border: 0;
  border-radius: 5px;
  margin: 0 0.7rem;
  font-weight: bold;
  :hover {
    cursor: pointer;
    background-color: var(--grey-2);
  }
`;