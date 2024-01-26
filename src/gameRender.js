import globals from "./globals.js";
import {Game, Icons} from "./constants.js";

export default function render()
{
    switch(globals.gameState)
    {
        case Game.PLAYING:
            renderGame();
            //Jugando
            break;
        case Game.OVER:
            //Se acaba la partida
            break;

    }
}