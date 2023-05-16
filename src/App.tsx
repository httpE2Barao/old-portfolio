import React from "react";
import Header from "./components/header";
import Apresentacao from "./components/apresentacao";
import Sobre from "./components/sobre";
import './ts/src/app'
import Habilidades from "./components/habilidades";
import Projetos from "./components/projetos";

function App() {
    return (
      <div className="App">

        <Header />

        <Apresentacao />

        <Sobre />

        <Habilidades 
          itens={[
            { title: 'HTML5', src: 'Imagens/html.svg', alt: 'HyperText Markup Language', link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML' },
            { title: 'CSS3', src: 'Imagens/css.svg', alt: 'Cascading Style Sheets', link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS' }, 
            { title: 'SASS', src: 'Imagens/sass.svg', alt: 'Syntactically Awesome Style Sheets', link: 'https://sass-lang.com/' },
            { title: 'JavaScript', src: 'Imagens/javascript.svg', alt: 'Linguagem de Programação', link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
            { title: 'TypeScript', src: 'Imagens/typescript.svg', alt: 'Linguagem de Programação', link: 'https://www.typescriptlang.org/' },
            { title: 'React', src: 'Imagens/react.svg', alt: 'Biblioteca de Javascript e Typescript', link: 'https://react.dev/' },
            { title: 'CSS in JS', src: 'Imagens/styledcomponents.svg', alt: 'Styled-components', link: 'https://styled-components.com/' },
          ]}
        />

        <Projetos 
          projetos={[
            { title: 'Sincronário Maia', src: './Imagens/project_sincronario.png', onClick: 'https://sincronario.vercel.app/'},
            { title: 'Video Play', src: './Imagens/project_video-play.png', onClick: 'https://video-play-nine.vercel.app/'},
            { title: 'Stopwatch', src: './Imagens/project_stopwatch.png', onClick: 'https://stopwatch-react-app0.vercel.app/'},
            { title: 'Número secreto', src: './Imagens/project_secret-number.png', onClick: 'https://jogo-numero-secreto-3425ysutw-httpe2barao.vercel.app/'},
            { title: 'Negociações', src: './Imagens/project_negociacoes.png', onClick: 'https://code-study-rho.vercel.app/TypeScript/Negocia%C3%A7%C3%B5es/app/dist/index.html'},
            { title: 'Alura Books', src: './Imagens/project_alura-books.png', onClick: 'https://alura-books-httpe2barao.vercel.app/'},
            { title: 'Projeto de Login', src: './Imagens/project_login-responsivo.png', onClick: 'https://projeto-login-three.vercel.app/'},
            { title: 'Moni Bank', src: './Imagens/project_moni-bank.png', onClick: 'https://httpe2barao.github.io/MoniBank/pages/abrir-conta-form.html'},
          ]}
        />


      </div>
    )
}
export default App;