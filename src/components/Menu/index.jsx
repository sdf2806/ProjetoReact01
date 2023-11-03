import { Link } from "react-router-dom"

export const Menu = () =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link to={"Contato/"}>
                        Contato
                    </Link>
                </li>

                <li>
                    <Link to={"Cursos/"}>
                        Cursos
                    </Link>
                </li>

                <li>
                    <Link to={"Projetos/"}>
                        Projetos
                    </Link>
                </li>

                <li>
                    <Link to={"Skills/"}>
                        Skills
                    </Link>
                </li>

                <li>
                    <Link to={"Sobre/"}>
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    )
}