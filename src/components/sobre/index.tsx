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
              Olá! Eu sou uma pessoa autodidata, artística e criativa, que gosta de se expressar e se comunicar. 
              Sou um desenvolvedor Front-End apaixonado por transformar ideias em produtos reais. Fiz um curso a parte 
              de audiovisual e tenho experiência com conceitos de design (UI/UX), comunicação e relações interpessoais. 
              Além disso, estou sempre buscando aprender e me aprimorar cada vez mais no universo do desenvolvimento web, 
              usando ferramentas modernas como React, Javascript e Typescript. Com código limpo e eficiente, eu tenho trabalhado 
              na construção de aplicações acessíveis e responsivas. Fora do mundo da programação, sou um ávido gamer e tenho grande 
              interesse nas Artes e Espiritualidade. Meu objetivo como desenvolvedor é criar experiências online inovadoras e 
              acessíveis para usuários em todo o mundo.
            </p>
            <label htmlFor="bt">Download CV</label>
            <a href="/cv-eliasbarao.pdf" download className="bt">Download CV</a>
          </div>
        </section>
      </article>
    )
}
export default Sobre