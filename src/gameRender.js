import globals from "./globals.js";
import {Game, Icons} from "./constants.js";

export default function render()
{
    switch(globals.gameState)
    {
        case Game.LOAD_PLAYING:
            //Cargamos
            loadPlaying();
        case Game.PLAYING:
            renderGame();
            //Jugando
            break;
        case Game.OVER:
            //Se acaba la partida
            break;

    }
}

function loadPlaying()
{
    //Borramos la pantalla entera
    globals.ctx.clearRect(0,0, globals.canvas.width, globals.canvas.height);
}

function renderGame()
{

   const SCORE = globals.score;

   globals.ctx.fillSt
}