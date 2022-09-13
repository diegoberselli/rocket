import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    align-items: center;

`;

export const StyledButton = styled.button `
width: 100px;
  height: 40px;
  background-color:#FF577F;
  color: var(--grey-0);
  border: 0;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: var(--grey-2);
  }
`;