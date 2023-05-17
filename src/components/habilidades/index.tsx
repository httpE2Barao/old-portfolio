import React from 'react'

interface itensProps {
    itens: item[];
}

interface item {
    title: string;
    src: string;
    alt: string;
    link: string;
}

const Habilidades = ({ itens }: itensProps) => {
    return (
        <article id="pag2" className="animate">

            <a href="#pag2">
                <h1 className="title">Skills</h1>
                <div className="gradientLine"></div>
            </a>

            <ul className="skills">
                {itens.map((item: item) => {
                    return (
                        <li
                        className='skill'
                        key={item.title}
                        onClick={() => window.open(`${item.link}`)}>
                            <span>
                                <h2>{item.title}</h2>
                                <img src={item.src} alt={item.alt} />
                            </span>
                            <div className="gradientLine"></div>
                        </li>
                    )
                })}
            </ul>

        </article>
    )
}
export default Habilidades