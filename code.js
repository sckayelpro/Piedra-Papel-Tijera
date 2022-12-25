//variables del modo de juego
const bestOfOne = document.querySelector("#bestOfOne");
const bestOfThree = document.querySelector("#bestOfThree");
const bestOfFive = document.querySelector("#bestOfFive");
const bestOfSeven = document.querySelector("#bestOfSeven");
const modoSeleccionadoVar = document.querySelector("#modo-seleccionado");
//variables del jugador 1
const opcPiedra1 = document.querySelector("#piedra-1");
const opcPapel1 = document.querySelector("#papel-1");
const opcTijera1 = document.querySelector("#tijera-1");
const seleccion1 = document.querySelector("#accion-seleccionada-1");
//variables del jugador 2
const opcPiedra2 = document.querySelector("#piedra-2");
const opcPapel2 = document.querySelector("#papel-2");
const opcTijera2 = document.querySelector("#tijera-2");
const seleccion2 = document.querySelector("#accion-seleccionada-2");
//variables contador de score
var score1 = 0;
var score2 = 0;

bestOfOne.addEventListener("click",modoSeleccionado)
bestOfThree.addEventListener("click",modoSeleccionado)
bestOfFive.addEventListener("click",modoSeleccionado)
bestOfSeven.addEventListener("click",modoSeleccionado)

function modoSeleccionado(){
  modoSeleccionadoVar.id = this.id
  if (modoSeleccionadoVar.id === "bestOfOne"){
    alert("Gana el mejor de 1 juego")
    opcPiedra1.addEventListener("click",mostrarOpcion1Bo1);
    opcPapel1.addEventListener("click",mostrarOpcion1Bo1);
    opcTijera1.addEventListener("click",mostrarOpcion1Bo1);
    
    opcPiedra2.addEventListener("click",mostrarOpcion2);
    opcPapel2.addEventListener("click",mostrarOpcion2);
    opcTijera2.addEventListener("click",mostrarOpcion2);
  }
  else if (modoSeleccionadoVar.id === "bestOfThree"){
    alert("Gana el mejor de 3 juegos")
    opcPiedra1.addEventListener("click",mostrarOpcion1Bo3);
    opcPapel1.addEventListener("click",mostrarOpcion1Bo3);
    opcTijera1.addEventListener("click",mostrarOpcion1Bo3);
    
    opcPiedra2.addEventListener("click",mostrarOpcion2);
    opcPapel2.addEventListener("click",mostrarOpcion2);
    opcTijera2.addEventListener("click",mostrarOpcion2);
  }
  else if (modoSeleccionadoVar.id === "bestOfFive"){
    alert("Gana el mejor de 5 juegos")
    opcPiedra1.addEventListener("click",mostrarOpcion1Bo5);
    opcPapel1.addEventListener("click",mostrarOpcion1Bo5);
    opcTijera1.addEventListener("click",mostrarOpcion1Bo5);
    
    opcPiedra2.addEventListener("click",mostrarOpcion2);
    opcPapel2.addEventListener("click",mostrarOpcion2);
    opcTijera2.addEventListener("click",mostrarOpcion2);
  }
  else if (modoSeleccionadoVar.id === "bestOfSeven"){
    alert("Gana el mejor de 7 juegos")
    opcPiedra1.addEventListener("click",mostrarOpcion1Bo7);
    opcPapel1.addEventListener("click",mostrarOpcion1Bo7);
    opcTijera1.addEventListener("click",mostrarOpcion1Bo7);
    
    opcPiedra2.addEventListener("click",mostrarOpcion2);
    opcPapel2.addEventListener("click",mostrarOpcion2);
    opcTijera2.addEventListener("click",mostrarOpcion2);
  }

function mostrarOpcion1Bo1(){
  seleccion1.src=this.src;
  seleccion1.id=this.id;
  seleccion1.style.visibility="hidden";
  if (score1 < 1 && score2 < 1){
    mostrarOpcion2
  }
  else if (score1>score2){
      alert(`GANA EL JUGADOR 1 por ${score1} a ${score2}`);
      window.location.reload();
  }
  else if (score2>score1){
      alert(`GANA EL JUGADOR 2 por ${score2} a ${score1}`);
      window.location.reload();
  }
}
function mostrarOpcion1Bo3(){
  seleccion1.src=this.src;
  seleccion1.id=this.id;
  seleccion1.style.visibility="hidden";
  if (score1 < 3 && score2 < 3){
    mostrarOpcion2
  }
  else if (score1>score2){
    alert(`GANA EL JUGADOR 1 por ${score1} a ${score2}`);
    window.location.reload();
  }
  else if (score2>score1){
    alert(`GANA EL JUGADOR 2 por ${score2} a ${score1}`);
    window.location.reload();
  }
}
function mostrarOpcion1Bo5(){
  seleccion1.src=this.src;
  seleccion1.id=this.id;
  seleccion1.style.visibility="hidden";
  if (score1 < 5 && score2 < 5){
    mostrarOpcion2
  }
  else if (score1>score2){
    alert(`GANA EL JUGADOR 1 por ${score1} a ${score2}`);
    window.location.reload();
  }
  else if (score2>score1){
    alert(`GANA EL JUGADOR 2 por ${score2} a ${score1}`);
    window.location.reload();
  }
}
function mostrarOpcion1Bo7(){
  seleccion1.src=this.src;
  seleccion1.id=this.id;
  seleccion1.style.visibility="hidden";
  if (score1 < 7 && score2 < 7){
    mostrarOpcion2
  }
  else if (score1>score2){
    alert(`GANA EL JUGADOR 1 por ${score1} a ${score2}`);
    window.location.reload();
  }
  else if (score2>score1){
    alert(`GANA EL JUGADOR 2 por ${score2} a ${score1}`);
    window.location.reload();
  }
}

function mostrarOpcion2(){
  seleccion2.src=this.src
  seleccion2.id=this.id
  seleccion2.style.visibility="hidden";
  if (seleccion2.id === "piedra-2" && seleccion1.id === "piedra-1"){
    seleccion1.style.visibility="visible";
    seleccion2.style.visibility="visible";
    // Crea el elemento p
    var p = document.createElement('p');
    // mantiene el score de ambos por empatar
    score1;
    score2;
    // Asigna el texto "" al elemento p
    p.textContent = `Es un empate porque ambos sacaron piedra, el score es:${score1}-${score2}`;
    // Obtiene el elemento div
    var div = document.getElementById('contenedor-juego');
    // Agrega el elemento p al final del elemento div
    div.appendChild(p);
  }
  else if (seleccion2.id === "piedra-2" && seleccion1.id === "papel-1"){
    seleccion1.style.visibility="visible";
    seleccion2.style.visibility="visible";
    // Crea el elemento p
    var p = document.createElement('p');
    // aumenta el score del ganador
    score1++;
    // Asigna el texto "Hola mundo" al elemento p
    p.textContent = `Gana el jugador 1 porque papel gana a piedra, el score es: ${score1}-${score2}`;
    // Obtiene el elemento div
    var div = document.getElementById('contenedor-juego');
    // Agrega el elemento p al final del elemento div
    div.appendChild(p);
  }
  else if (seleccion2.id === "piedra-2" && seleccion1.id === "tijera-1"){
    seleccion1.style.visibility="visible";
    seleccion2.style.visibility="visible";
    // Crea el elemento p
    var p = document.createElement('p');
    // aumenta el score del ganador
    score2++;
    // Asigna el texto "Hola mundo" al elemento p
    p.textContent = `Gana el jugador 2 porque piedra gana a tijera, el score es: ${score1}-${score2}`;
    // Obtiene el elemento div
    var div = document.getElementById('contenedor-juego');
    // Agrega el elemento p al final del elemento div
    div.appendChild(p);
  }
  else if (seleccion2.id === "papel-2" && seleccion1.id === "piedra-1"){
    seleccion1.style.visibility="visible";
    seleccion2.style.visibility="visible";
    // Crea el elemento p
    var p = document.createElement('p');
    // aumenta el score del ganador
    score2++;
    // Asigna el texto "Hola mundo" al elemento p
    p.textContent = `Gana el jugador 2 porque papel gana a piedra, el score es: ${score1}-${score2}`;
    // Obtiene el elemento div
    var div = document.getElementById('contenedor-juego');
    // Agrega el elemento p al final del elemento div
    div.appendChild(p);
  }
  else if (seleccion2.id === "papel-2" && seleccion1.id === "papel-1"){
    seleccion1.style.visibility="visible";
    seleccion2.style.visibility="visible";
    // Crea el elemento p
    var p = document.createElement('p');
    // mantiene el score de ambos por empatar
    score1;
    score2;
    // Asigna el texto "Hola mundo" al elemento p
    p.textContent = `Es un empate porque ambos sacaron papel, el score es: ${score1}-${score2}`;
    // Obtiene el elemento div
    var div = document.getElementById('contenedor-juego');
    // Agrega el elemento p al final del elemento div
    div.appendChild(p);
  }
  else if (seleccion2.id === "papel-2" && seleccion1.id === "tijera-1"){
    seleccion1.style.visibility="visible";
    seleccion2.style.visibility="visible";
    // Crea el elemento p
    var p = document.createElement('p');
    // aumenta el score del ganador
    score1++;
    // Asigna el texto "Hola mundo" al elemento p
    p.textContent = `Gana el jugador 1 porque tijera gana a papel, el score es: ${score1}-${score2}`;
    // Obtiene el elemento div
    var div = document.getElementById('contenedor-juego');
    // Agrega el elemento p al final del elemento div
    div.appendChild(p);
  }
  else if (seleccion2.id === "tijera-2" && seleccion1.id === "piedra-1"){
    seleccion1.style.visibility="visible";
    seleccion2.style.visibility="visible";
    // Crea el elemento p
    var p = document.createElement('p');
    // aumenta el score del ganador
    score1++;
    // Asigna el texto "Hola mundo" al elemento p
    p.textContent = `Gana el jugador 1 porque piedra gana a tijera, el score es: ${score1}-${score2}`;
    // Obtiene el elemento div
    var div = document.getElementById('contenedor-juego');
    // Agrega el elemento p al final del elemento div
    div.appendChild(p);
  }
  else if (seleccion2.id === "tijera-2" && seleccion1.id === "papel-1"){
    seleccion1.style.visibility="visible";
    seleccion2.style.visibility="visible";
    // Crea el elemento p
    var p = document.createElement('p');
    // aumenta el score del ganador
    score2++;
    // Asigna el texto "Hola mundo" al elemento p
    p.textContent = `Gana el jugador 2 porque tijera gana a papel, el score es: ${score1}-${score2}`;
    // Obtiene el elemento div
    var div = document.getElementById('contenedor-juego');
    // Agrega el elemento p al final del elemento div
    div.appendChild(p);
  }
  else if (seleccion2.id === "tijera-2" && seleccion1.id === "tijera-1"){
    seleccion1.style.visibility="visible";
    seleccion2.style.visibility="visible";
    // Crea el elemento p
    var p = document.createElement('p');
    // mantiene el score de ambos por empatar
    score1;
    score2;
    // Asigna el texto "Hola mundo" al elemento p
    p.textContent = `Es un empate porque ambos sacaron tijera, el score es: ${score1}-${score2}`;
    // Obtiene el elemento div
    var div = document.getElementById('contenedor-juego');
    // Agrega el elemento p al final del elemento div
    div.appendChild(p);
  } 
}
}

