import { Bt } from "./styles"

const Button = ({ callack, children }) =>{
    
    return(
        <>
            <Bt onClick={callack}>{children}</Bt>
        </>
    )

}

export default Button