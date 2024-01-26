import globals from "./globals.js";
import { Level, Level1 } from "./Levels.js";
import Timer from "./Timer.js";
import { Game, FPS, State, ID, Icons} from "./constants.js";
import Player from "./Element.js";
import { keydownHandler, keyupHandler } from "./events.js";
import Element from "./Element.js";

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
    globals.gameState = Game.LOAD_PLAYING;

    globals.action = {
        moveLeft: false,
        moveRight: false,
        moveUp: false,
        moveDown: false,
    }
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
    globals.movementTime = new Timer(0.2, 1);
    globals.levelTime = new Timer(180, 1);
}

function initGameElements()
{
    //console.log("INIT ELEMENTS");

    initPlayer();
    //console.log(globals.gameElements);
}

function initPlayer()
{
    console.log("INIT PLAYER");

    //Posiciones iniciales
    const xInit = 8;
    const yInit = 9;

    //Posiciones del player (al principio serán las mismas que las iniciales)
    const xPos = xInit;
    const yPos = yInit;

    const state = State.STILL;
    const id = ID.PLAYER_ID;
    const icon = Icons.PLAYER;

    //Creamos 
    const player = new Element(id, state, icon, xInit, yInit, xPos, yPos);

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