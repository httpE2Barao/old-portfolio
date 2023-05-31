import React from "react";

interface ContatosProps {
    contatos: Contato[];
}

interface Contato {
    title: string;
    src: string;
    info: string;
    link: string;
}

const Contatos: React.FC<ContatosProps> = ({ contatos }) => {
    return (
        <>
            <article id="pag4" className="animate">
                <a href="#pag4">
                    <h1 className="title">Contato</h1>
                    <div className="gradientLine"></div>
                </a>
                <section className="contatos">
                    {contatos.map((contato: Contato) => {
                        return (
                            <div 
                            className="contato" 
                            key={contato.title}
                            onClick={(event: React.MouseEvent<HTMLElement>) =>
                                window.open(contato.link)} >
                                <img src={contato.src} alt={`Entre em contato por ${contato.title}`}></img>
                                <h2>{contato.title}</h2>
                                <p>{contato.info}</p>
                            </div>
                        );
                    })}
                </section>
            </article >
        </>
    );
};
export default Contatos