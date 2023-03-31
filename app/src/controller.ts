import { domInjector } from "./domInjector.js";
import { abrirFechar } from "./showMenu.js";

export class Controller {
    @domInjector('[data-menu]')
    private botaoMenu: HTMLElement;

    @domInjector('[data-menu-pag]')
    private pagMenu: HTMLElement;

    @domInjector('[data-titulo]')
    private botaoVoltar: HTMLElement;

    private itensMenu: NodeList = document.querySelectorAll('[data-menu-item]');

    constructor() { }

    public AddListeners() {
        const botao = this.botaoMenu;
        const menu = this.pagMenu;
        const botaoVoltar = this.botaoVoltar;

        botao.addEventListener('click', () => {
            abrirFechar(menu, botao)
        })

        botaoVoltar.addEventListener('click', () => {
            if (menu.classList.contains('open')){
                abrirFechar(menu, botao)
            }
        })

        var itensConvertidos: any = Array.from(this.itensMenu);
        itensConvertidos.forEach((item: HTMLElement) => {
            item.addEventListener('click', () => {
                abrirFechar(menu, botao)
            })
        })
    }

}