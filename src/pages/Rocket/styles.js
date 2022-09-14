import styled from "styled-components";

export const Container = styled.div `
  height: 450px;
  display: flex;
  align-items: center;
  margin-top: 50px;
  font-size: 15px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  img {
    max-height:300px;
    width: auto;
    height: auto;
    border-radius: 8px;
    object-fit: cover;

    @media screen and (max-width: 760px) {
        max-height:180px;
  }

  }
    div{
        width: 500px;
        display: flex;
        flex-direction: column;
        margin-left: 40px;
    }

`;