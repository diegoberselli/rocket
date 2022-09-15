import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    justify-content: space-between;
    padding: 0 3rem;
    align-items: center;

    h1{
      :hover{
        cursor:pointer;
        color:#FF577F;
      }
    }


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

  @media(max-width: 768px) {
      width: 60px;
      background-color:transparent;
      :hover {
        cursor: pointer;
        background-color: transparent;
        border:1px solid #FF577F;   
  }
  }

`;