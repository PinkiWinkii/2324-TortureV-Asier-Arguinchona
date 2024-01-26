import globals from "./globals.js";

import {initHTMLelements} from "./initialize.js"

import render from "./gameRender.js";

window.onload = init;

function init()
{
    //Inicializamos los elementos HTML: Canvas, Context, Caja de texto de pruebas
    initHTMLelements();

    //Inicializamos el mapa del juego
    initLevel();
}