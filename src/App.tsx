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
            { title: 'GitHub', src: 'Imagens/github.svg', alt: 'Versionamento de código', link: 'https://github.com/' },
            { title: 'SASS', src: 'Imagens/sass.svg', alt: 'Syntactically Awesome Style Sheets', link: 'https://sass-lang.com/' },
            { title: 'React', src: 'Imagens/react.svg', alt: 'Biblioteca de Javascript e Typescript', link: 'https://react.dev/' },
            { title: 'Figma', src: 'Imagens/figma.svg', alt: 'Editor gráfico de design', link: 'https://www.figma.com' },
            { title: 'CSS in JS', src: 'Imagens/styledcomponents.svg', alt: 'Styled-components', link: 'https://styled-components.com/' },
            { title: 'User Experience', src: 'Imagens/uiux.svg', alt: 'User Interface / Experience', link: 'https://www.alura.com.br/artigos/ux-e-ui-conheca-as-semelhancas-e-diferencas-entre-ambos' },
            { title: `ㅤ Amazon ㅤ Web`, src: 'Imagens/aws.svg', alt: 'Amazon Web Services', link: 'https://aws.amazon.com/pt/' },
          ]}
        />

        <Projetos 
          projetos={[
            { title: 'Sincronário Maia', src: './Imagens/project_sincronario.png', website: 'https://sincronario.vercel.app/', github: 'https://github.com/httpE2Barao/Sincronario', description: 'lorem'},
            { title: 'Video Play', src: './Imagens/project_video-play.png', website: 'https://video-play-nine.vercel.app/', github: 'https://github.com/httpE2Barao/VideoPlay', description: 'Neste projeto, eu utilizei CSS avançado e Javascript avançado para criar uma interface dinâmica e responsiva. Com o CSS, eu apliquei Flex Box e Grid layout para organizar os elementos da página de forma flexível e adaptável. Com o Javascript, eu usei Fetch API e Async Functions para fazer requisições assíncronas a uma API externa e manipular os dados recebidos.'},
            { title: 'Stopwatch', src: './Imagens/project_stopwatch.png', website: 'https://stopwatch-react-app0.vercel.app/', github: 'https://github.com/httpE2Barao/Stopwatch-react-app', description: 'lorem'},
            { title: 'Número secreto', src: './Imagens/project_secret-number.png', website: 'https://jogo-numero-secreto-3425ysutw-httpe2barao.vercel.app/', github: 'https://github.com/httpE2Barao/Numero-secreto', description: 'lorem'},
            { title: 'Negociações', src: './Imagens/project_negociacoes.png', website: 'https://code-study-rho.vercel.app/TypeScript/Negocia%C3%A7%C3%B5es/app/dist/index.html', github: 'https://github.com/httpE2Barao/Code-study/tree/main/TypeScript/Negocia%C3%A7%C3%B5es', description: 'lorem'},
            { title: 'Alura Books', src: './Imagens/project_alura-books.png', website: 'https://alura-books-httpe2barao.vercel.app/', github: 'https://github.com/httpE2Barao/AluraBooks', description: 'lorem'},
            { title: 'Projeto de Login', src: './Imagens/project_login-responsivo.png', website: 'https://projeto-login-three.vercel.app/', github: 'https://github.com/httpE2Barao/Projeto-login', description: 'lorem'},
            { title: 'Moni Bank', src: './Imagens/project_moni-bank.png', website: 'https://httpe2barao.github.io/MoniBank/pages/abrir-conta-form.html', github: 'https://github.com/httpE2Barao/MoniBank', description: 'lorem'},
            { title: 'Books', src: './Imagens/project_books-react.png', website: 'https://books-react-project-a.vercel.app/', github: 'https://github.com/httpE2Barao/Books_react-project', description: 'lorem'},
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