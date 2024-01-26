import {Game} from "./constants.js";

export default{

    //Acceso al canvas y context
    canvas: {},
    ctx: {},

    //Estado de juego. Inicializamos a INVÁLIDO
    gameState: Game.PLAYING,

    //Tiempo de ciclo anterior (milliseconds)
    previousCycleMilliseconds: -1,

    //Tiempo de ciclo de juego real (seconds)
    deltaTime: 0,
    cycleRealTime: 0,

    //Tiempo de ciclo objetivo (seconds, constante)
    frameTimeObj: 0,

    //Declaramos la variable de la puntuación
    score: 0,

    //Datos del nivel
    level: {},

    //Objeto que guarda el estado de la tecla pulsada
    action: {},

    //Game timers
    levelTime: {},
    movementTime: {},
    spiderMovementTime: {},

    //Game elements
    gameElements: [],

    //Variable de la vida
    life: 3,
}