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
}