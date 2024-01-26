import globals from "./globals.js";
import {Game} from "./constants.js";

export default function render()
{
    switch(globals.gameState)
    {
        case Game.PLAYING:
            //Jugando
            break;
        case Game.OVER:
            //Se acaba la partida
            break;

    }
}