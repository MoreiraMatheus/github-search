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
    height: 40px;
    padding: 4px 8px;
    border-radius: 8px;
    cursor: pointer;
`


export default Button