// import { abrirFechar } from "./showMenu";
// // import { domInjector } from "./domInjector";

// export class Controller {
//     private botaoMenu: HTMLElement | null;
//     private pagMenu: HTMLElement | null;
//     private botaoVoltar: HTMLElement | null;

//     constructor() {
//         document.addEventListener('DOMContentLoaded', () => {
//             this.botaoMenu = document.querySelector('[data-menu]');
//             console.log(this.botaoMenu)
//             this.pagMenu = document.querySelector('[data-menu-pag]');
//             console.log(this.pagMenu)
//             this.botaoVoltar = document.querySelector('[data-titulo]');
//             console.log(this.botaoVoltar)
//         });
//     }
    
//     public AddListeners() {
//         const botao = this.botaoMenu;
//         const menu = this.pagMenu;
//         const botaoVoltar = this.botaoVoltar;

//         if (botao && menu && botaoVoltar) {

//             botao.addEventListener('click', () => {
//                 console.log(botao)
//                 abrirFechar(menu, botao)
//             })

//             botaoVoltar.addEventListener('click', () => {
//                 console.log('clicou')
//                 if (menu.classList.contains('open')){
//                     abrirFechar(menu, botao)
//                 }
//             })
//         }


//         // var itensConvertidos: any = Array.from(this.itensMenu);
//         // itensConvertidos.forEach((item: HTMLElement) => {
//         //     item.addEventListener('click', () => {
//         //         abrirFechar(menu, botao)
//         //     })
//         // })
//     }
// }