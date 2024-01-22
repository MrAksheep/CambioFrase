const btn = document.getElementById("boton");
const texto = document.getElementById("pablo");
const main = document.getElementsByTagName("main");
console.log(main);
let texto1 = "Hola querido amigo!";
let texto2 = "pico pal que lee!";
let viernes = "<video autoplay src='viernes.mp4'></video>";

btn.addEventListener("click", () => {
  main[0].innerHTML = viernes;
});
