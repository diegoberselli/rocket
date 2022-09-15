import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;


  div{
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
      width: 100px;
      height: 30px;
      background-color:#FF577F;
      color: var(--grey-0);
      border: 0;
      border-radius: 5px;
  :hover {
    cursor: pointer;
    background-color: var(--grey-2);
  }
    }
    
    p{
        width: 300px;
        margin-left: 20px;
    }
  }

  img {
    max-width:100%;
    width: 300px;
    height: 200px;
    align-items: center;
    display: flex;
    border-radius: 8px;
    object-fit: cover;
}
`;

export const ButtonStyled = styled.button `
  color: pink;
`

export const ContainerModal = styled.div `
    background-color: rgba(0,0,0,0.5);
    width: 100vw;
    height: 150vh;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`