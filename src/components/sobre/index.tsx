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
            Sou um desenvolvedor Front-End que adora se expressar e transformar ideias em realidade.
            Tenho formação em audiovisual e experiência com design (UI/UX), comunicação e relações interpessoais.
            Uso ferramentas modernas como React, Javascript e Typescript para criar aplicações web acessíveis e responsivas,
            com código limpo e eficiente. Além de ser autodidata, artístico e criativo, também sou um gamer entusiasta e
            tenho interesse nas Artes e Espiritualidade. Meu objetivo é criar experiências online inovadoras e acessíveis
            para usuários em todo o mundo.
          </p>
          <label htmlFor="bt">Download CV</label>
          <a href="/cv_minimalista-eliasbarao.pdf" download className="bt">Download CV</a>
        </div>
      </section>
    </article>
  )
}
export default Sobre