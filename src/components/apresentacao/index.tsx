import React from "react"

const Apresentacao = () => {
  return (
    <article id="pag0">
      <article className="home">
        <section className="apresentacao">
          <div className="intro">
            <h1>Olá, sou</h1>
            <h1>Elias Barão<br />
              <div className="gradientLine"></div>
            </h1>
            <p className="typing">Desenvolvedor Web</p>
            <input
              type="button"
              id="bt"
              value="Entrar em contato"
              onClick={(event: React.MouseEvent<HTMLInputElement>) =>
                window.open("mailto:e2barao@hotmail.com")
              }
            />
          </div>
          <div className="perfil">
            <img src="./Imagens/foto-times-square_maior.jpg" alt=""
              onClick={(event: React.MouseEvent<HTMLImageElement>) =>
                window.open('https://github.com/httpE2Barao')}
            />
          </div>
        </section>
      </article>
    </article>
  )
}
export default Apresentacao