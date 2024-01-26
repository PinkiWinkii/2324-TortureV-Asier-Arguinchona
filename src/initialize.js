import globals from "./globals.js";
import { Level, Level1 } from "./Levels.js";
import Timer from "./Timer.js";
import { Game, FPS, State, ID, Icons, moneyPos} from "./constants.js";
import Player from "./Element.js";
import { keydownHandler, keyupHandler } from "./events.js";
import Element from "./Element.js";
import { checkearZero } from "./gameLogic.js";

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

function initGameElements()
{
    //console.log("INIT ELEMENTS");

    initPlayer();
    initMoney();
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

    //Creamos el elemento
    const player = new Element(id, state, icon, xInit, yInit, xPos, yPos);

    globals.gameElements.push(player);
}

function initMoney()
{
    console.log("init money");

    const randomSpawn = Math.floor(Math.random() * 6);

    const xInit = moneyPos.xPos[randomSpawn];
    const yInit = moneyPos.yPos[randomSpawn];

    const xPos = xInit;
    const yPos = yInit;

    const state = State.STILL;
    const id = ID.MONEY_ID;
    const icon = Icons.MONEY;

    //Creamos el elemento
    const money = new Element(id, state, icon, xInit, yInit, xPos, yPos);
    globals.gameElements.push(money);
}

function initTimers()
{
    //Creamos timer 
    globals.movementTime = new Timer(0.2, 0.1);
    globals.levelTime = new Timer(180, 1);
}



export {
    initHTMLelements,
    initLevel,
    initEvents,
    initTimers, 
    initVars,
    initGameElements,
    initMoney
}