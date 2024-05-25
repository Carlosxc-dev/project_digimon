import styled from "styled-components";

export const Conteiner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1.5rem;
    

    .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        background-color: #d9d9d9;
        border-radius: 20px;
        border: 1px solid #fff;
        padding: 1rem;

        h3{
            font-size: 20px;
            color: #fff;
        }

        img{
            width: 200px;
            height: 200px;
            border-radius: 20px;
        }

        button{
            background-color: #008CC7;
            border: none;
            border-radius: 20px;
            padding: .5rem 1rem;
            cursor: pointer;
            font-size: .8rem;
            font-weight: 700;
            color: #fff;
            transition: background-color .3s;

            &:hover{
                background-color: #fff;
                color: #008CC7;
            }
        }
    }

`;