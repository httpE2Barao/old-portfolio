import { abrirFechar } from "./showMenu";
// import { domInjector } from "./domInjector";

export class Controller {
// Exclamation mark ! after the property name to tell the TypeScript compiler that the property will be assigned a value before it is used.
    private botaoMenu!: HTMLElement | null;
    private pagMenu!: HTMLElement | null;
    private botaoVoltar!: HTMLElement | null;

    constructor() {
        window.onload = () => {
            this.botaoMenu = document.querySelector('[data-menu]');
            console.log()
            this.pagMenu = document.querySelector('[data-menu-pag]');
            this.botaoVoltar = document.querySelector('[data-titulo]');
        };
    }
    
    public AddListeners() {
        const botao = this.botaoMenu;
        console.log(botao);
        const menu = this.pagMenu;
        console.log(menu);
        const botaoVoltar = this.botaoVoltar;
        console.log(botaoVoltar);

        if (botao && menu && botaoVoltar) {

            botao.addEventListener('click', () => {
                console.log(botao)
                abrirFechar(menu, botao)
            })

            botaoVoltar.addEventListener('click', () => {
                console.log('clicou')
                if (menu.classList.contains('open')){
                    abrirFechar(menu, botao)
                }
            })
        }


        // var itensConvertidos: any = Array.from(this.itensMenu);
        // itensConvertidos.forEach((item: HTMLElement) => {
        //     item.addEventListener('click', () => {
        //         abrirFechar(menu, botao)
        //     })
        // })
    }
}