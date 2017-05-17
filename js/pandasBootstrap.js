var botonOrigen = document.getElementsByTagName("button")[0];
var textoOrigen = document.getElementsByTagName("p")[0]
var botonExtincion = document.getElementsByTagName("button")[1];
var textoExtincion = document.getElementsByTagName("p")[1];

botonOrigen.addEventListener("click", aparecerTextoOrigen);
botonExtincion.addEventListener("click", aparecerTextoExtincion);

function aparecerTextoOrigen (){

  if (textoOrigen.style.visibility == "hidden") {
      textoOrigen.style.visibility = "visible";
  } else{
      textoOrigen.style.visibility = "hidden";
  }
}

function aparecerTextoExtincion (){

  if (textoExtincion.style.visibility == "hidden"){
    textoExtincion.style.visibility = "visible";
  } else{
    textoExtincion.style.visibility = "hidden";
  }
}

var cerrarFoto = document.getElementsByTagName("span");
var imagenAcerrar = cerrarFoto.length;

for (var i=0; i<imagenAcerrar; i++){
  cerrarFoto[i].addEventListener("click", imagen);
}

function imagen() {
  this.parentNode.style.display="none";
}

var botonRestaurarFotos = document.getElementsByTagName("button")[2];
botonRestaurarFotos.addEventListener("click", restaurarFotos);

function restaurarFotos() {
  for(var i=0; i<imagenAcerrar; i++){
    cerrarFoto[i].parentNode.style.display = "inline-block";
  }
}
