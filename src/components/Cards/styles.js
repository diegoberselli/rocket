import styled from "styled-components";

export const Container = styled.div `
  margin: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  h2{
    font-size: 12px;
  }

  :hover{
    cursor: pointer;
    opacity: 0.4;
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    object-fit: cover;
  }

  img {
    max-width:100%;
    width: 350px;
    height: 250px;
    border-radius: 8px;
    object-fit: cover;
}
`;