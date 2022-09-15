import styled from "styled-components";

export const Container = styled.div `
    background-color: rgba(0,0,0,0.9);
    position: fixed;
    padding: 20px 80px;
    border-radius: 7px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

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
        /* padding: 0 50px; */

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