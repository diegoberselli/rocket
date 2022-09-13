import styled from "styled-components";

export const Container = styled.div `
  width: 27rem;
  margin: 3rem 4rem;
  /* display: flex; */
  /* flex-wrap: wrap; */
  /* justify-content: space-around; */
  /* align-items: center; */

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-height:300px;
    width: auto;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
}
`;