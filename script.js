const btn = document.getElementById("boton");
const texto = document.getElementById("pablo");

let texto1 = "Hola querido amigo!";
let texto2 = "pico pal que lee!";
let viernes =
  '<iframe width="560" height="315" src="https://www.youtube.com/embed/aSUuw5HY9eY?si=2wi3BN1xjD8PRlKS&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';

btn.addEventListener("click", () => {
  texto.innerHTML = viernes;
});
