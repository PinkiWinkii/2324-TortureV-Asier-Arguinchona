import globals from "./globals.js";
import { Game, Key } from "./constants.js";

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
    //console.log("ESTAMOS EN PLAYGAME");
}