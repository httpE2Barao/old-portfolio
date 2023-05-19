import React from "react"
import { useState } from 'react'

const Header = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <header>
                <nav className="nav">

                    <div className="menu-icon" onClick={() => setOpen(!open)}>
                        {open ? (
                            <img src="Imagens/menu-aberto.png" />
                        ) : (
                            <img src="Imagens/menu-fechado.png" alt="Menu" />
                        )}
                    </div>
                    <a href="#pag0" onClick={() => open ? setOpen(!open) : ''}
                    >Portifólio</a>
                    <h2></h2>
                </nav>
                <div className="gradientLine"></div>
            </header>

            {open && (
                <div className="menu-pag">
                    <h2>Bem-vindo!<div className="gradientLine"></div></h2>
                    <ul className="menu-conteiner" onClick={() => setOpen(!open)}>
                        <li className="menu-item"><a href="#pag1" >sobre</a></li>
                        <li className="menu-item"><a href="#pag2" >habilidades</a></li>
                        <li className="menu-item"><a href="#pag3" >projetos</a></li>
                        <li className="menu-item"><a href="#pag4" >contato</a></li>
                    </ul>
                </div>
            )}
        </>
    )
}
export default Header;