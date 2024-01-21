const btn = document.getElementById('boton')
const texto = document.getElementById('pablo')

let texto1 = 'Hola querido amigo!'
let texto2 = 'pico pal que lee!'
<<<<<<< HEAD
let viernes = '<iframe width="560" height="315" src="https://www.youtube.com/embed/aSUuw5HY9eY?si=Yc6BEDG2dUgkKfQM" id="youtubeVideo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'

btn.addEventListener('click', () => {
    texto.innerHTML = viernes
})

document.addEventListener("DOMContentLoaded", function() {
    // Obtiene el elemento del iframe
    var iframe = document.getElementById("youtubeVideo");

    // Verifica si el iframe es visible en la ventana del navegador
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para reproducir el video si el iframe es visible
    function playVideoIfVisible() {
        if (isElementInViewport(iframe)) {
            // Cambia el valor de 'autoplay' a 1 para reproducir automáticamente el video
            iframe.src = "https://www.youtube.com/embed/aSUuw5HY9eY?si=Yc6BEDG2dUgkKfQM";
            // Elimina el evento de desplazamiento después de reproducir el video
            window.removeEventListener("scroll", playVideoIfVisible);
        }
    }

    // Agrega un evento de desplazamiento para verificar la visibilidad al desplazarse
    window.addEventListener("scroll", playVideoIfVisible);

    // Reproduce el video si ya es visible en la carga inicial
    playVideoIfVisible();
});
=======
let viernes = '<iframe width="560" height="315" src="https://www.youtube.com/embed/aSUuw5HY9eY?si=Yc6BEDG2dUgkKfQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'

btn.addEventListener('click', () => {
    texto.innerHTML = viernes
})
>>>>>>> abb6ee0b2cb72899e12002d5a7ec77232a54e281
