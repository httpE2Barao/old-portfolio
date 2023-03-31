export function ShowProjectsDescription() {
    let projetos = document.querySelectorAll('.projeto');
    for (let projeto of projetos) {
        projeto.addEventListener('click', () => {
            console.log(projeto);
        });
    }
}
