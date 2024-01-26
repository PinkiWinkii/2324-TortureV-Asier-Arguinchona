import globals from "./globals.js";

import { Level, Level1 } from "./Levels.js";

import Timer from "./Timer.js";

//Función que inicializa los elementos HTML
function initHTMLelements()
{

    //Canvas, context SCREEN
    globals.canvas = document.getElementById('gameScreen');
    globals.ctx = globals.canvas.getContext('2d');
    
    //Eliminación del Anti-ALiasing
    globals.ctx.imageSmoothingEnabled = false;

    //Caja de text para pruebas
    globals.txtPruebas = document.getElementById('txtPruebas');
}

function initLevel()
{
    //Creamos y guardamos nuestro nivel
    globals.level = new Level(Level1);
}

function initEvents()
{
    //Add the keyboard event listeners
    window.addEventListener("keydown",  keydownHandler,  false);
    window.addEventListener("keyup",    keyupHandler,    false);
}

function initTimers()
{
    //Creamos timer 
    globals.levelTime = new Timer(180, 1);
}

export {
    initHTMLelements,
    initLevel,
    initEvents,
    initTimers
}