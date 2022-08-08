import { Wrapper } from "./styles";
import Link from "../Link/Link";

const Repository = ({ Nome='Nome não encontrado', link }) => {
    return(
        <Wrapper>
            <h1>{Nome}</h1>
            {link ? <Link href={link} target="_blank">Visitar</Link> : null}
        </Wrapper>
    )
}

export default Repository