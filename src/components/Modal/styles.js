import styled from "styled-components";

export const Container = styled.div `
    background-color: rgba(0,0,0,0.9);
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 20px;
    border-radius: 7px;

    @media screen and (min-width: 768px) {
        left: 35%;
  }

    .modal-add-title{
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        button{
            height: 20px;
            :hover{
                cursor: pointer;
            }
        }
    }
    
    form{
        display: flex;
        flex-direction: column;
        padding: 0 70px;

        label{
            margin-top: 15px;
        }

        input{
            padding: 3px 20px;

        }
        button{
            margin-top: 30px;
            cursor: pointer;
            background-color:  #FF577F;
            color:#fff
        }
    }
    
`