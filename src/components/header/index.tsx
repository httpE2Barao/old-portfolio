import React from "react"
// import { Controller } from '../../ts/src/controller'

const Header = () => {
    return (
            <>
                <header>
                    <nav className="nav">
                        
                            <div className="menu-icon" data-menu>
                                <img src="Imagens/menu-fechado.png" alt="Menu" />
                                <img src="Imagens/menu-aberto.png" className="hidden" />
                            </div>

                        <a href="#pag0" data-titulo>Portifólio</a>
                        <h2></h2>
                    </nav>
                    <div className="gradientLine"></div>
                </header>

                <div className="menu-pag" data-menu-pag>
                    <h2>Bem-vindo!<div className="gradientLine"></div></h2>
                    <ul className="menu-conteiner">
                        <li className="menu-item"><a href="#pag1" data-menu-item>sobre</a></li>
                        <li className="menu-item"><a href="#pag2" data-menu-item>habilidades</a></li>
                        <li className="menu-item"><a href="#pag3" data-menu-item>projetos</a></li>
                        <li className="menu-item"><a href="#pag4" data-menu-item>contato</a></li>
                    </ul>
                </div>
            </>
        )
}
export default Header;