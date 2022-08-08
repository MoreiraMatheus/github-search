import styled from "styled-components"

export const Wrapper = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 0 8px;

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
    
    img{
        background-color: #ccc;
        width: 100%;
    }
`