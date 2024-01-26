import globals from "./globals.js";
import { Game, Key } from "./constants.js";
import { initGameElements } from "./initialize.js";

export default function update()
{
    switch(globals.gameState)
    {
        case Game.PLAYING:
            playGame()
            break;
        default:
            break;
    }
}

function playGame()
{
    initGameElements();
    //console.log("ESTAMOS EN PLAYGAME");
}