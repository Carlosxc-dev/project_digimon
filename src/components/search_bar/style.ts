import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100%;
    margin: 2rem 0;
`;


export const Content = styled.div`
    width: 80%;
    margin: 0 auto;

    form{
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: .5rem 1rem;

        border: 1px solid #fff;
        background-color: #d9d9d9;
        border-radius: 10px;

        .text{
            width: 100%;
            border: none;
            background-color: transparent;
            outline: none;
            font-size: 16px;
            color: #000;
        }

        .text::placeholder{
            color: #fff;
        }

        .button{
            background-color: transparent;
            border: none;
            cursor: pointer;
            color: #fff;

            .icon{
                font-size: 20px;
            }
        }
    }

`;