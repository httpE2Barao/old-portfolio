export function domInjector (...seletor: any) {
    return function (target: any, propertyKey: string) {
        console.log(`Modificando prototype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`)

        let elemento: HTMLElement;
        const getter = function() {
            if (!elemento) {
                elemento = document.querySelector(seletor) as HTMLElement;
                console.log(`Buscando DOM para ${seletor} em ${propertyKey}`)
            }
            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        );
    }
}