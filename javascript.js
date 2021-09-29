"use strict"

window.addEventListener("load", () => {

    let pantalla = document.getElementById("nums");
    let btnMas = document.getElementById("btnMas");
    let btnReset = document.getElementById("btnReset");
    let btnMenos = document.getElementById("btnMenos");

    let valor = 0;

    if(localStorage.getItem("valorAlmacen") === null){
        localStorage.setItem("valorAlmacen", 0);
    } else {
        valor = localStorage.getItem("valorAlmacen");        
    }

    let almacen = localStorage.getItem("almacen");
  

    // FUNCIONES    
    function ActualizarAlmacen(val){
        if(almacen !== val){
            localStorage.setItem("valorAlmacen", val);
        }
    }

    function IncrementarValor(){
        ++valor;
        ActualizarAlmacen(valor);
    }
    
    function DecrementarValor(){
        if(valor > 0) --valor;
        ActualizarAlmacen(valor);
    }

    function Resetear(){
        valor = 0;
        ActualizarAlmacen(valor);
    }
    
    function ActualizarPantalla(){
        pantalla.innerHTML = valor;
    }
    
    ActualizarAlmacen();
    ActualizarPantalla();

    // EVENTOS
    // Incremento
    btnMas.addEventListener("click", () => {
        IncrementarValor();
        ActualizarPantalla();
    });

    // Decremento
    btnMenos.addEventListener("click", () => {
        DecrementarValor();
        ActualizarPantalla();
    });

    // Reseteo
    btnReset.addEventListener("click", () => {
        Resetear();
        ActualizarPantalla();
    });
});