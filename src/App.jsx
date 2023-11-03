import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Home } from "./pages/Home";
import { Sobre } from "./pages/Sobre";
import { Cursos } from "./pages/Cursos";
import { Skills } from "./pages/Skills";
import { Projetos } from "./pages/Projetos";
import { Contato } from "./pages/Contato";
import { Page404 } from "./pages/Page404";
import { Menu } from "./components/Menu";

function App() {
  return (
    <>
    <GlobalStyle/>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="sobre" element={<Sobre/>}/>
        <Route path="cursos" element={<Cursos/>}/>
        <Route path="skills" element={<Skills/>}/>
        <Route path="projetos" element={<Projetos/>}/>
        <Route path="contato" element={<Contato/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
 