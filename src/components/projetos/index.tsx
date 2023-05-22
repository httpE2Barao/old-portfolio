import React from "react";
import { useState } from "react";

interface projetosProps {
    projetos: projeto[];
}
interface projeto {
    title: string;
    src: string;
    website: string;
    github: string;
    description: string;
}

const Projetos = ({ projetos }: projetosProps) => {
    const [open, setOpen] = useState(-1);
    return (
        <>
        <article id="pag3" className="animate">
            <a href="#pag3">
                <h1 className="title">Projects<div className="gradientLine"></div></h1>
            </a>

            <ul className="projetos">
                {projetos.map((projeto: projeto, index) => {
                    return (
                        <>
                            <li className="projeto" key={projeto.title}>
                                <h2 className="projeto__title">{projeto.title}<div className="gradientLine"></div></h2>
                                <img src={projeto.src} alt={`Projeto ${projeto.title}`} onClick={() => setOpen(open === index ? -1 : index)} />
                            </li>
                        </>
                    );
                })}
            </ul>
            <label htmlFor="bt">Repositório</label>
            <input type="button" id="bt" value="Repositório" src="#"
                onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                    window.open('https://code-study-rho.vercel.app/')}
                    />
        </article>
        {open !== -1 && (
                <article className="description">
                    <h2 className="projeto__title">{projetos[open].title}<div className="gradientLine"></div></h2>
                    <div className="description__flex">
                        <img src={projetos[open].src} alt={`Projeto ${projetos[open].title}`} />
                        <p>{projetos[open].description}</p>
                    </div>
                    <div className="description__buttons">
                        <input type="button" id='bt' value="Acessar" onClick={(event: React.MouseEvent<HTMLInputElement>) => 
                            window.open(projetos[open].website)
                        }/>
                        <img src="/Imagens/menu-aberto.png" alt="fechar" onClick={() => setOpen(-1)} />
                        <input type="button" id='bt' value="Ver código" onClick={(event: React.MouseEvent<HTMLInputElement>) => 
                            window.open(projetos[open].github)
                        }/>
                    </div>
                </article>
            )}
        </>
    )
}
export default Projetos