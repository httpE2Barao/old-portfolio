import React from "react"
import { useState } from 'react'

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <header>
                <nav className="nav">

                    <div className="menu-icon" data-menu
                        onClick={() => setOpen(!open)}>
                        <img src="Imagens/menu-fechado.png" alt="Menu" />
                        <img src="Imagens/menu-aberto.png" className="hidden" />
                    </div>

                    <a href="#pag0" data-titulo 
                    onClick={() => open? setOpen(!open): ''}
                        >Portifólio</a>
                    <h2></h2>
                </nav>
                <div className="gradientLine"></div>
            </header>

            { open && (
                <div className="menu-pag" data-menu-pag>
                    <h2>Bem-vindo!<div className="gradientLine"></div></h2>
                    <ul className="menu-conteiner" onClick={() => setOpen(!open)}>
                        <li className="menu-item"><a href="#pag1" data-menu-item>sobre</a></li>
                        <li className="menu-item"><a href="#pag2" data-menu-item>habilidades</a></li>
                        <li className="menu-item"><a href="#pag3" data-menu-item>projetos</a></li>
                        <li className="menu-item"><a href="#pag4" data-menu-item>contato</a></li>
                    </ul>
                </div>
            )}
        </>
    )
}
export default Header;