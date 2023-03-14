let menu = document.querySelector('[data-menu]')
let menuPag = document.querySelector('[data-menu-pag]')
const menuItem = document.querySelectorAll('[data-menu-item]')

menu.addEventListener('click', (abrirFechar))
menuItem.forEach(item => {
    item.addEventListener('click', abrirFechar);
  });

function abrirFechar() {
    if (menu.classList.contains('opened')) {
        menu.innerHTML = ''
        menu.innerHTML = '<img src="./Imagens/menu-fechado.png" alt="Menu" data-menu-icon>'
        menu.classList.remove('opened')

        menuPag.classList.remove('open')
    } else {
        menu.innerHTML = ''
        menu.innerHTML = '<img src="./Imagens/menu-aberto.png" alt="Menu" data-menu-icon>'
        menu.classList.add('opened')

        menuPag.classList.add('open')
    }
}



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyBPaKeAR1gZdy3C35v3WgArDFRMrmlbvqA",
//     authDomain: "portifolio-a4cb8.firebaseapp.com",
//     projectId: "portifolio-a4cb8",
//     storageBucket: "portifolio-a4cb8.appspot.com",
//     messagingSenderId: "33283053828",
//     appId: "1:33283053828:web:ac1d57b019232712289851",
//     measurementId: "G-RRWR1XJQY3"
//   };

//   const app = initializeApp(firebaseConfig);

//   function storeInputs() {
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;
//     console.log("Email: " + email + "___" + "Mensagem: " + message);
//   };
//   var storageRef = document.storage().ref(email);


  
//   var uploadTask = storageRef.put(file);
  