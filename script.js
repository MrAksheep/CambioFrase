const btn = document.getElementById('boton')
const texto = document.getElementById('pablo')

let texto1 = 'Hola querido amigo!'
let texto2 = 'pico pal que lee!'

btn.addEventListener('click', () => {
    texto.innerText = texto2
})