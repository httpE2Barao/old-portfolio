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

      <div className="Main">

        <Apresentacao />

        <Sobre />

        <Habilidades
          itens={[
            { title: 'HTML5', src: 'Imagens/html.svg', alt: 'HyperText Markup Language', link: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML' },
            { title: 'CSS3', src: 'Imagens/css.svg', alt: 'Cascading Style Sheets', link: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS' },
            { title: `Photoshop`, src: 'Imagens/photoshop.svg', alt: 'Editor de Imagem da abode', link: 'https://www.adobe.com/products/photoshop.html' },
            { title: 'JavaScript', src: 'Imagens/javascript.svg', alt: 'Linguagem de Programação', link: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript' },
            { title: 'TypeScript', src: 'Imagens/typescript.svg', alt: 'Linguagem de Programação', link: 'https://www.typescriptlang.org/' },
            { title: 'GitHub', src: 'Imagens/github.svg', alt: 'Versionamento de código', link: 'https://github.com/' },
            { title: 'SASS', src: 'Imagens/sass.svg', alt: 'Syntactically Awesome Style Sheets', link: 'https://sass-lang.com/' },
            { title: 'React', src: 'Imagens/react.svg', alt: 'Biblioteca de Javascript e Typescript', link: 'https://react.dev/' },
            { title: 'Figma', src: 'Imagens/figma.svg', alt: 'Editor gráfico de design', link: 'https://www.figma.com' },
            { title: 'CSS in JS', src: 'Imagens/styledcomponents.svg', alt: 'Styled-components', link: 'https://styled-components.com/' },
            { title: 'Web Design', src: 'Imagens/uiux.svg', alt: 'User Interface / Experience', link: 'https://www.alura.com.br/artigos/ux-e-ui-conheca-as-semelhancas-e-diferencas-entre-ambos' },
            { title: `ㅤ Amazon ㅤ Web`, src: 'Imagens/aws.svg', alt: 'Amazon Web Services', link: 'https://aws.amazon.com/pt/' },
          ]}
        />

        <Projetos
          projetos={[
            { title: 'Serenatto', src: './Imagens/project_serenatto-cafe.png', website: 'https://serenattocafe.vercel.app/', github: 'https://github.com/httpE2Barao/Code-study/tree/main/Bootstrap', description: 'O projeto é um site informativo e elegante sobre a cafeteria Serenatto, usando e aprimorando minhas habilidades com o framework Bootstrap. O site consiste na apresentação dos produtos da cafeteria, como cafés especiais, bolos, salgados e vitaminas. Também possui um botão para alternar entre o tema claro e o modo escuro, criando uma atmosfera mais aconchegante e intimista. O objetivo é oferecer uma experiência única e diferenciada para os clientes.' },
            { title: 'Negociações', src: './Imagens/project_negociacoes.png', website: 'https://negocicoes.vercel.app/dist/index.html', github: 'https://github.com/httpE2Barao/Code-study/tree/main/TypeScript/Negocia%C3%A7%C3%B5es', description: 'Este é um projeto que consome uma API externa e aplica as boas práticas do Typescript. Ele garante a qualidade do código durante a compilação, não permite a geração de código com erros, usa typagem estática e orientação a objeto. Ele também utiliza decorators para adicionar funcionalidades extras às classes, métodos e propriedades. Além disso, ele trata os possíveis erros da API com um micro framework que facilita o gerenciamento de rotas, requisições e respostas.' },
            { title: 'CodeChella', src: './Imagens/project_codechella.png', website: 'https://codechella2023-six.vercel.app/', github: 'https://github.com/httpE2Barao/CodeChella2023', description: 'Este é um projeto react de um festival musical. Eu criei uma interface moderna e responsiva, utilizando o conceito de "mobile first" para adaptar o layout aos diferentes tamanhos de tela utilizando o figma, depois o implementei com typescript para programar os componentes e as funcionalidades. O objetivo do projeto é mostrar as informações sobre o festival, como as atrações, os ingressos, o mapa do local e também respostas para perguntas frequentes.' },
            { title: 'Video Play', src: './Imagens/project_video-play.png', website: 'https://video-play-nine.vercel.app/', github: 'https://github.com/httpE2Barao/VideoPlay', description: 'Neste projeto, eu utilizei CSS avançado e Javascript avançado para criar uma interface dinâmica e responsiva. Com o CSS, eu apliquei Flex Box e Grid layout para organizar os elementos da página de forma flexível e adaptável. Com o Javascript, eu usei Fetch API e Async Functions para fazer requisições assíncronas a uma API externa e manipular os dados recebidos. O código também conta com throw errors para lidar com possíveis erros na comunicação com a API ou na manipulação dos dados.' },
            { title: 'Sincronário Maia', src: './Imagens/project_sincronario.png', website: 'https://sincronario.vercel.app/', github: 'https://github.com/httpE2Barao/Sincronario', description: 'Este projeto usa React e JavaScript para criar uma interface dinâmica e interativa. Utilizando componentes React para organizar o código em partes reutilizáveis e funções do React, como useEffect e useState, para gerenciar o estado e os efeitos colaterais da aplicação. O objetivo é demonstrar as possibilidades e vantagens de usar essas tecnologias para desenvolver aplicações web modernas e responsivas.' },
            { title: 'Books', src: './Imagens/project_books-react.png', website: 'https://books-react-project-a.vercel.app/', github: 'https://github.com/httpE2Barao/Books_react-project', description: 'Este é um projeto que usa Typescript, React e CSS avançado para criar uma interface de usuário responsiva e elegante. Typescript garante a segurança dos tipos e evita erros de compilação. React permite reutilizar componentes e criar uma experiência dinâmica. CSS avançado usa mobile first, media queries e variáveis para adaptar o layout aos diferentes tamanhos de tela e preferências do usuário.' },
            { title: 'Stopwatch', src: './Imagens/project_stopwatch.png', website: 'https://stopwatch-react-app0.vercel.app/', github: 'https://github.com/httpE2Barao/Stopwatch-react-app', description: 'Este é um projeto que usa as seguintes tecnologias: React, Typescript e Sass. Com React, criei componentes reutilizáveis que usam os hooks useState e useEffect para gerenciar o estado e os efeitos colaterais. Com Typescript, eu defini interfaces para os tipos de dados, fiz conversão deles e evitei conflitos de tipagem. Com Sass, eu estilizei os componentes com variáveis e a adaptação com Media Queries.' },
            { title: 'Número secreto', src: './Imagens/project_secret-number.png', website: 'https://jogo-numero-secreto-3425ysutw-httpe2barao.vercel.app/', github: 'https://github.com/httpE2Barao/Numero-secreto', description: 'Este é um projeto que usa Javascript com várias funcionalidades, lógica para sortear um número aleatório, para validação se é maior ou menor que o número secreto, conversão de dados, API externa para o reconhecimento de voz. O objetivo é adivinhar o número secreto que o computador escolheu entre 10 e 1000 usando o seu microfone. O computador vai te dar dicas se o seu palpite é maior ou menor que o número secreto. Se você acertar, pode jogar novamente ou sair do jogo dizendo "Game over".' },
            { title: 'Moni Bank', src: './Imagens/project_moni-bank.png', website: 'https://httpe2barao.github.io/MoniBank/pages/abrir-conta-form.html', github: 'https://github.com/httpE2Barao/MoniBank', description: 'O projeto usa Javascript para criar uma conta em um site de banco. Ele tem boas práticas de validação de formulários, como verificar se o usuário é maior de idade, se o CPF tem os dígitos válidos e com a funcionalidade de tirar foto pelo webcam. Ele também trata os erros que podem ocorrer com dados inválidos. O projeto é simples, mas mostra como usar a lógica de programação para fazer uma aplicação web de cadastro.' },
          ]}
        />

        <Contatos
          contatos={[
            { title: 'LinkedIn', src: './Imagens/linkedin.svg', info: '@e2barao', link: 'https://www.linkedin.com/in/e2barao/' },
            { title: 'GitHub', src: './Imagens/github.svg', info: '@httpE2Barao', link: 'https://www.github.com/httpE2Barao' },
            { title: 'WhatsApp', src: './Imagens/phone.svg', info: '(41) 99804-6755', link: 'https://api.whatsapp.com/send?phone=551998046755' },
            { title: 'E-mail', src: './Imagens/mail.svg', info: 'e2barao@hotmail.com', link: 'mailto:e2barao@hotmail.com' },
          ]}
        />
      </div>
    </div>
  )
}
export default App;