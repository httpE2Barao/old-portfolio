import React from "react";
import './ts/main'
import Header from "./components/header";
import Apresentacao from "./components/apresentacao";
import Sobre from "./components/sobre";
import Habilidades from "./components/habilidades";
import Projetos from "./components/projetos";
import Contatos from "./components/contatos";

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
            { title: 'JavaScript', src: 'Imagens/javascript.svg', alt: 'Linguagem de Programação', link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
            { title: 'TypeScript', src: 'Imagens/typescript.svg', alt: 'Linguagem de Programação', link: 'https://www.typescriptlang.org/' },
            { title: 'SASS', src: 'Imagens/sass.svg', alt: 'Syntactically Awesome Style Sheets', link: 'https://sass-lang.com/' },
            { title: 'React', src: 'Imagens/react.svg', alt: 'Biblioteca de Javascript e Typescript', link: 'https://react.dev/' },
            { title: 'Figma', src: 'Imagens/figma.svg', alt: 'Editor gráfico de design', link: 'https://www.figma.com' },
            { title: 'CSS in JS', src: 'Imagens/styledcomponents.svg', alt: 'Styled-components', link: 'https://styled-components.com/' },
          ]}
        />

        <Projetos 
          projetos={[
            { title: 'Sincronário Maia', src: './Imagens/project_sincronario.png', link: 'https://sincronario.vercel.app/'},
            { title: 'Video Play', src: './Imagens/project_video-play.png', link: 'https://video-play-nine.vercel.app/'},
            { title: 'Stopwatch', src: './Imagens/project_stopwatch.png', link: 'https://stopwatch-react-app0.vercel.app/'},
            { title: 'Número secreto', src: './Imagens/project_secret-number.png', link: 'https://jogo-numero-secreto-3425ysutw-httpe2barao.vercel.app/'},
            { title: 'Negociações', src: './Imagens/project_negociacoes.png', link: 'https://code-study-rho.vercel.app/TypeScript/Negocia%C3%A7%C3%B5es/app/dist/index.html'},
            { title: 'Alura Books', src: './Imagens/project_alura-books.png', link: 'https://alura-books-httpe2barao.vercel.app/'},
            { title: 'Projeto de Login', src: './Imagens/project_login-responsivo.png', link: 'https://projeto-login-three.vercel.app/'},
            { title: 'Moni Bank', src: './Imagens/project_moni-bank.png', link: 'https://httpe2barao.github.io/MoniBank/pages/abrir-conta-form.html'},
          ]}
        />

        <Contatos
          contatos={[
          { title: 'LinkedIn', src: './Imagens/linkedin.svg', info: '@e2barao',  link: 'https://www.linkedin.com/in/e2barao/'},
          { title: 'GitHub', src: './Imagens/github.svg', info: '@httpE2Barao',  link: 'https://www.github.com/httpE2Barao'},
          { title: 'WhatsApp', src: './Imagens/phone.svg', info: '(41) 99804-6755',  link: 'https://api.whatsapp.com/send?phone=551998046755'},
          { title: 'E-mail', src: './Imagens/mail.svg', info: 'e2barao@hotmail.com',  link: 'mailto:e2barao@hotmail.com'},
          ]}
        />

      </div>
    )
}
export default App;