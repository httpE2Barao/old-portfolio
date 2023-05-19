import React from "react"

const Sobre = () => {
    return (
        <article id="pag1" className="animate">
        <a href="#pag1">
          <h1 className="title">About-me</h1>
          <div className="gradientLine"></div>
        </a>
  
        <section className="sobreMim">
          <div className="resumo">
            <p>
              Olá! Eu sou um desenvolvedor Front-End apaixonado por transformar ideias em produtos reais.
              Com formação pela Alura e uma grande dose de autodidatismo, eu tenho trabalhado na construção de aplicações
              modernas com código limpo e eficiente,
              sempre dando ênfase em acessibilidade e responsividade. Além do mundo da programação, sou um ávido gamer e
              tenho grande interesse nas Artes e Espiritualidade.
              Meu objetivo como desenvolvedor é criar experiências online inovadoras e acessíveis para usuários em todo o
              mundo.
            </p>
            <label htmlFor="bt">Download CV</label>
            <a href="/cv-eliasbarao.pdf" download id="bt">Download CV</a>
          </div>
        </section>
      </article>
    )
}
export default Sobre