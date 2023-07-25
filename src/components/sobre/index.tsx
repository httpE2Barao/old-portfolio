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
          Como desenvolvedor Front-End, minha paixão é materializar ideias através da combinação entre código e criatividade. 
          Minha formação em audiovisual e experiência em design (UI/UX), comunicação e habilidades interpessoais me permitem abordar projetos com uma visão holística. 
          Com habilidades em React, Javascript, Typescript, Bootstrap, Tailwind e JQuery, crio aplicações web que primam pela acessibilidade, responsividade e eficiência.

          Minha busca constante pelo conhecimento como autodidata enriquece minha abordagem artística e criativa. 
          Como entusiasta gamer e amante das artes e espiritualidade, busco inspiração em diversas fontes para oferecer experiências online inovadoras e verdadeiramente envolventes para usuários de todas as partes do mundo. 
          Meu objetivo é transcender as expectativas e proporcionar aos usuários uma jornada digital única e marcante.
          </p>
          <label htmlFor="bt">Download CV</label>
          <a href="/cv_minimalista-eliasbarao.pdf" download className="bt">Download CV</a>
        </div>
      </section>
    </article>
  )
}
export default Sobre