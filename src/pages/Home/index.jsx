import { HomeBanner, HomePerfil, HomePerfilImg, HomePerfilName, HomePerfilRole } from "./style"

import perfil from "../../assets/image2.jpg"

export const Home = () =>{
    return(
       <HomeBanner>
        <HomePerfil>
            <HomePerfilImg src={perfil} /> 
            <HomePerfilName>Silas Dutra Freitas</HomePerfilName>
            <HomePerfilRole>Desenvolvedor Full Stack</HomePerfilRole>
        </HomePerfil>
       </HomeBanner>
    )
}