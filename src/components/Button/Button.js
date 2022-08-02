import styled from "styled-components"

const Button = ({ children }) =>{
    
    return(
        <>
            <Bt>{children}</Bt>
        </>
    )

}

const Bt = styled.button`
    border: 2px solid white;
    border-radius: 8px;
    height: 30px;
    padding: 4px 8px;
    cursor: pointer;
`


export default Button