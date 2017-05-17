var botonOrigen = document.getElementsByTagName("button")[0];
var textoOrigen = document.getElementsByTagName("p")[0]
var botonExtincion = document.getElementsByTagName("button")[1];
var textoExtincion = document.getElementsByTagName("p")[1];
var cerrar = document.getElementsByClName ("cerrarFoto")[];

botonOrigen.addEventListener("click", aparecerTextoOrigen);
botonExtincion.addEventListener("click", aparecerTextoExtincion);

for (i = 0; i < cerrarFoto.lenght; i++){
  cerrarFoto[i].addEventListener("click", imagen)
}

function imagen(){
  this.pareNode.style.display="none";
}

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
