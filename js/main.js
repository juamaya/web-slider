let imagenes = [
  "images/imagen1.avif",
  "images/imagen2.avif",
  "images/imagen3.jpg",
];

document.Imagen.src = imagenes[0];

let slider_der = document.querySelector(".slider-der");
let slider_izq = document.querySelector(".slider-izq");
let contador = 0;

function mover_der() {
  contador++;
  if (contador > imagenes.length - 1) {
    contador = 0;
  }
  document.Imagen.src = imagenes[contador];
}

let timeIntervalo = 3000;
let intervalo = setInterval(mover_der, timeIntervalo);

slider_der.addEventListener("click", () => {
  clearInterval(intervalo);
  mover_der();
  intervalo = setInterval(mover_der, timeIntervalo);
});

function mover_izq() {
  contador--;
  if (contador < 0) {
    contador = imagenes.length - 1;
  }
  document.Imagen.src = imagenes[contador];
}

slider_izq.addEventListener("click", () => {
  clearInterval(intervalo);
  mover_izq();
  intervalo = setInterval(mover_der, timeIntervalo);
});
