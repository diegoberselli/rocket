import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  

  .buttons{
    display: flex;
    justify-content: space-between;
    margin: 0px 20px;
  }

`;

export const StyledButton = styled.button `
  height: 40px;
  width: 100px;
  background-color:var(--grey-1);
  color:#ffff;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
  :hover {
    cursor: pointer;
    background-color:  #FF577F;
  }
`;

export const Spinner = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -25px 0 0 -25px
`