import globals from "./globals.js";

import {initHTMLelements, initLevel, initEvents, initTimers} from "./initialize.js"

import render from "./gameRender.js";

window.onload = init;

function init()
{
    //Inicializamos los elementos HTML: Canvas, Context, Caja de texto de pruebas
    initHTMLelements();

    //Inicializamos el mapa del juego
    initLevel();

    console.log("AQUI TA");

    //Inicializacion de timers
    initTimers();

    //Inicializacion de los eventos (en este caso las entradas de teclado)
    initEvents();

    //Start the first frame request
    window.requestAnimationFrame(gameLoop);

}

//Bucle principal de ejecución
function gameLoop(timeStamp)
{
    // Keep requesting new frames
    window.requestAnimationFrame(gameLoop, globals.canvas);

    //Tiempo real de ciclo de ejecución
    const elapsedCycleSeconds = (timeStamp - globals.previousCycleMilliseconds) / 1000; //Seconds

    //console.log(elapsedCycleSeconds);

    //Tiempo anterior de ciclo de ejecución
    globals.previousCycleMilliseconds = timeStamp;

    //Variable que corrige el tiempo de frame debido a retrasos con respecto al tiempo objetivo
    globals.deltaTime += elapsedCycleSeconds;

    //Corrección
    globals.cycleRealTime += elapsedCycleSeconds;

    if(globals.cycleRealTime >= globals.frameTimeObj)
    {
        //Update the game logic. gameLogic.js
        update();

        //console.log(Game.gameState);

        //Perform the drawing operation. gameRender.js
        render();

        //Corregimos lose xcesos de tiempo
        globals.cycleRealTime -= globals.frameTimeObj;
        globals.deltaTime = 0;
    }
    
}