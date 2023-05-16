import React from "react";

interface projeto {
    title: string
    src: string
    onClick: string
}

const Projetos = ({ projetos }) => {
    return (
        <article id="pag3" className="animate">
            <a href="#pag3">
                <h1 className="title">Projects</h1>
                <div className="gradientLine"></div>
            </a>

            <ul className="projetos">
            {projetos.map((projeto: projeto ) => {
                return (
                    <li className="projeto">
                    <h2>{projeto.title}<div className="gradientLine"></div>
                    </h2>
                    <img src={projeto.src} alt={`Projeto ${projeto.title}`}
                        onClick={(event: React.MouseEvent<HTMLElement>) => 
                        window.open(projeto.onClick)}/>
                </li>
                )
            })}
            </ul>

            <label htmlFor="bt">Repositório</label>
            <input type="button" id="bt" value="Repositório" src="#"
                onClick={(event: React.MouseEvent<HTMLInputElement>) => 
                    window.open('https://code-study-rho.vercel.app/')}
                />
        </article>
    )
}
export default Projetos