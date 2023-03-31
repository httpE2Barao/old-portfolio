var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "./domInjector.js";
import { abrirFechar } from "./showMenu.js";
export class Controller {
    constructor() {
        this.itensMenu = document.querySelectorAll('[data-menu-item]');
    }
    AddListeners() {
        const botao = this.botaoMenu;
        const menu = this.pagMenu;
        const botaoVoltar = this.botaoVoltar;
        botao.addEventListener('click', () => {
            abrirFechar(menu, botao);
        });
        botaoVoltar.addEventListener('click', () => {
            if (menu.classList.contains('open')) {
                abrirFechar(menu, botao);
            }
        });
        var itensConvertidos = Array.from(this.itensMenu);
        itensConvertidos.forEach((item) => {
            item.addEventListener('click', () => {
                abrirFechar(menu, botao);
            });
        });
    }
}
__decorate([
    domInjector('[data-menu]')
], Controller.prototype, "botaoMenu", void 0);
__decorate([
    domInjector('[data-menu-pag]')
], Controller.prototype, "pagMenu", void 0);
__decorate([
    domInjector('[data-titulo]')
], Controller.prototype, "botaoVoltar", void 0);
