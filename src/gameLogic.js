import globals from "./globals.js";
import { Game, ID, Key, State } from "./constants.js";
import { initGameElements } from "./initialize.js";

export default function update()
{
    switch(globals.gameState)
    {
        case Game.LOAD_PLAYING:
            loadPlaying();
            break;

        case Game.PLAYING:
            playGame()
            break;

        default:
            break;
    }
}

function loadPlaying()
{
    //console.log("LOAD PLAYING");

    initGameElements();
    globals.gameState = Game.PLAYING;
}

function playGame()
{
    //console.log("ESTAMOS EN PLAYGAME");
    updateElements();

}

function updateElements()
{
    //console.log(globals.gameElements.length);

    for(let i = 0; i < globals.gameElements.length; ++i)
    {
        const element = globals.gameElements[i];
        if(element.state === State.OFF)
        {
            //Borramos
        }
        else
        {
            updateElement(element);
        }
    }
}

function updateElement(element)
{
    const type = element.id;
    switch (type)
    {
        //Caso del player
        case ID.PLAYER_ID:
            //console.log(element);
            updatePlayer(element);
            break;

        default:
            console.log("Not a valid ID");
    }
}

function updatePlayer(element)
{
    //console.log(element);

    //console.log("UPDATE PLAYER");

    readKeyboardAndMovePlayer(element)

    switch(element.state)
    {
        case State.RIGHT:
            element.xPos += 1;
            break;
        
        case State.LEFT:
            element.xPos -= 1;
            break;
        
        case State.UP:
            element.yPos -= 1
            break;

        case State.DOWN:
            element.yPos += 1;
            break;
        
        case State.STILL:
            //No se mueve
            break;
        default:
            //A rellenar
            break;
    }

    console.log(element.state);
    //console.log(globals.action);
}

function readKeyboardAndMovePlayer(element)
{
    
    if(globals.action.moveRight)
    {
        element.state = State.RIGHT;
    }
    else if(globals.action.moveLeft)
    {
        element.state = State.LEFT;
    }
    else if(globals.action.moveUp)
    {
        element.state = State.UP;
    }
    else if(globals.action.moveDown)
    {
        element.state = State.DOWN;
    }
    else
    {
        element.state = State.STILL;
    }
}