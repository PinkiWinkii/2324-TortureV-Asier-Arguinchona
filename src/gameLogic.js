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

    //Detectar colisiones
    detectCollisions(element);

    readKeyboardAndMovePlayer(element)

    if(!element.canMove)
    {
        checkIfCanMove(element);
    }


    if(element.canMove)
    {
        switch(element.state)
        {
            case State.RIGHT:
                if(!element.isCollidingWithRight)
                {
                    element.xPos += 1;
                    element.canMove = false;
                }
                break; 
            
            case State.LEFT:
                if(!element.isCollidingWithLeft)
                {
                    element.xPos -= 1;
                    element.canMove = false;
                }
                break;
            
            case State.UP:
                if(!element.isCollidingWithTop)
                {
                    element.yPos -= 1
                    element.canMove = false;
                }
                break;
    
            case State.DOWN:
                if(!element.isCollidingWithBottom)
                {
                    element.yPos += 1;
                    element.canMove = false;
                }
                break;
            
            case State.STILL:
                //No se mueve
                break;
            default:
                //A rellenar
                break;
        }
    }


    //console.log(element.state);
    //console.log(globals.action);
}

function checkIfCanMove(element)
{
    //Incrementamos el contador de cambio de valor
    globals.movementTime.timeChangeCounter += globals.deltaTime;

    //Si ha pasado el tiempo necesario, cambiamos el valor del timer
    if(globals.movementTime.timeChangeCounter > globals.movementTime.timeChangeValue)
    {

        globals.movementTime.value--;

        //Reseteamos timeChanegCounter
        globals.movementTime.timeChangeCounter = 0;
    }


    if(globals.movementTime.value < 0)
    {
        element.canMove = true;     
        
        globals.movementTime.value = 0.2;
    }
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

function detectCollisions(element)
{
    const levelData = globals.level.data;

    console.log(levelData[element.yPos][element.xPos]);

    if(levelData[element.yPos + 1][element.xPos] === 1)
    {
        element.isCollidingWithBottom = true;
        console.log("MURO ABAJO");
    }
    else
    {
        element.isCollidingWithBottom = false;
        console.log("NO HAY MURO ABAJO");
    }

    if(levelData[element.yPos - 1][element.xPos] === 1)
    {
        element.isCollidingWithTop = true;
        console.log("MURO ARRIBA");
    }
    else
    {
        element.isCollidingWithTop = false;
        console.log("NO HAY MURO ARRIBA");
    }

    if(levelData[element.yPos][element.xPos + 1] === 1)
    {
        element.isCollidingWithRight = true;
        console.log("MURO DERECHA");
    }
    else
    {
        element.isCollidingWithRight = false;
        console.log("NO HAY MURO DERECHA");
    }

    if(levelData[element.yPos][element.xPos - 1] === 1)
    {
        element.isCollidingWithLeft = true;
        console.log("MURO IZQUIERDA");
    }
    else
    {
        element.isCollidingWithLeft = false;
        console.log("NO HAY MURO IZQUIERDA");
    }
    //console.log(levelData[element.xPos + 1][levelData[element.yPos]]);



}