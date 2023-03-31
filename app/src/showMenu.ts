export function abrirFechar(menu: HTMLElement, botao: HTMLElement) {
    if (menu.classList.contains('open')) {
        botao.innerHTML = ''
        botao.innerHTML = '<img src="./Imagens/menu-fechado.png" alt="Menu" data-menu-icon>'
        botao.classList.remove('opened')
        menu.classList.remove('open')
    } else {
        botao.innerHTML = ''
        botao.innerHTML = '<img src="./Imagens/menu-aberto.png" alt="Menu" data-menu-icon>'
        botao.classList.add('opened')
        menu.classList.add('open')
    }
}
    