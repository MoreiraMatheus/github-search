import styled from "styled-components"

export const Wrapper = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 0 8px;
    text-align: center;

    @media (max-width: 900px) {
        width: 30%;
    }
    @media (max-width: 750px) {
        width: 40%;
    }
    @media (max-width: 500px) {
        height: 35%;
        width: 100%;
        flex-direction: row;
    }

    div{
        @media (max-width: 450px) {
            h1{
                font-size: 1.1em;
            }
            p{
                font-size: 0.8em;
            }
        }
    }

    h1, p, a{
        margin: 4px 0;
    }

    h1{
        font-size: 1.5em;
    }
`
export const Image = styled.div`
    width: 150px;
    height: 150px;
    margin: 50px auto 10px auto;
    border-radius: 50%;
    border: 3px solid #ccc;
    overflow: hidden;

    @media (max-width: 500px) {
        margin: 10px auto;
        width: 130px;
        height: 130px;
    }
    @media (max-width: 400px) {
        width: 110px;
        height: 110px;
    }
    
    img{
        background-color: #ccc;
        width: 100%;
    }
`