var contador = 0; // Iniciarlizar nuestro contador en 0

function Incrementar() {
 contador++;
 document.getElementById("contador").innerHTML = contador;
}
function Decrementar(){
    contador--;
    document.getElementById("contador").innerHTML = contador;
}
function Resetear(){
    contador = 0;
    document.getElementById("contador").innerHTML = contador;
}

 const btnIncrementar = document.getElementById("Incrementar");
 const btnDecrementar = document.getElementById("Decrementar");
 const btnResetear = document.getElementById("Resetear");

 btnIncrementar.onclick = () => Incrementar();
 btnDecrementar.addEventListener("click",() => Decrementar());
 btnResetear.addEventListener("click",() => Resetear());