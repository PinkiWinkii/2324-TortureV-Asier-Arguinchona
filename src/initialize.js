import globals from "./globals.js";
import { Level, Level1 } from "./Levels.js";
import Timer from "./Timer.js";
import { Game, FPS } from "./constants.js";
import Player from "./Player.js";
import { keydownHandler, keyupHandler } from "./events.js";

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

function initVars()
{
    //Inicializamos las variables de gestión de tiempo
    globals.previousCycleMilliseconds = 0;
    globals.deltaTime = 0;
    globals.frameTimeObj = 1 / FPS; //Frame time in seconds

    //Inicializamos el estado del juego
    globals.gameState = Game.PLAYING;
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

function initGameElements()
{
    initPlayer();
}

function initPlayer()
{
    const xInit = 7;
    const yInit = 8;

    const xPos = xInit;
    const yPos = yInit;

    const player = new Player(xInit, yInit, xPos, yPos);

    globals.gameElements.push(player);
}

export {
    initHTMLelements,
    initLevel,
    initEvents,
    initTimers, 
    initVars,
    initGameElements
}