import globals from "./globals.js";
import { Game, Key, State } from "./constants.js";
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
    updateElements();
    updatePlayer();

}

function updateElements()
{
    for(let i = 0; i < globals.gameElements.length; ++i)
    {
        const element = globals.gameElements[i];
        if(element.state != State.OFF)
        {
            updateElement(element);
        }
        else
        {
            //Por ahora nada
        }
    }
}

function updateElement(element)
{

}

function updatePlayer()
{
    const player = 
    readKeyboardAndMovePlayer()
}

function readKeyboardAndMovePlayer()
{
    
}