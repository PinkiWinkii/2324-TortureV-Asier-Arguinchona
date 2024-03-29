import globals from "./globals.js";
import { Game, ID, Key, State, spiderMovement} from "./constants.js";
import { initGameElements, initMoney } from "./initialize.js";

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

        case Game.OVER:
            //SE ha acabado la partida
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
    checkIfGameOver();
    //console.log("ESTAMOS EN PLAYGAME");
    updateElements();

}

function checkIfGameOver()
{
    if(globals.life <= 0)
    {
        globals.gameState = Game.OVER;
    }
}

function updateElements()
{
    //console.log(globals.gameElements.length);

    for(let i = 0; i < globals.gameElements.length; ++i)
    {
        const element = globals.gameElements[i];
        if(element.state === State.OFF)
        {
            globals.gameElements.splice(i, 1);
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

        case ID.MONEY_ID:
            updateMoney(element);
            break;

        case ID.SPIDER_ID:
            updateSpider(element);
            break;

        default:
            console.log("Not a valid ID");
    }
}

function updateMoney(element)
{
    //console.log("ESTA UPDATEANDO EL MONEY");
    checkIfIsCollidingWithPlayer(element);

}

function updateSpider(element)
{
    if(!element.canMove)
    {

        checkIfSpiderCanMove(element);
    }

    detectCollisions(element);

    checkIfIsCollidingWithPlayer(element);
    
    let randomMovement = Math.floor(Math.random() * 4);

    
    //console.log(spiderMovement.POSSIBLE_MOVEMENTS[randomMovement]);

    if(element.canMove)
    {
        switch(spiderMovement.POSSIBLE_MOVEMENTS[randomMovement])
        {
            case 0:
                if(!element.isCollidingWithRight)
                {
                    element.xPos += 1;
                    element.canMove = false;
                }
                break; 
            
            case 1:
                if(!element.isCollidingWithLeft)
                {
                    element.xPos -= 1;
                    element.canMove = false;
                }
                break;
            
            case 2:
                if(!element.isCollidingWithTop)
                {
                    element.yPos -= 1
                    element.canMove = false;
                }
                break;
    
            case 3:
                if(!element.isCollidingWithBottom)
                {
                    element.yPos += 1;
                    element.canMove = false;
                }
                break;
            
            default:
                //A rellenar
                break;
        }
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

function checkIfSpiderCanMove(element)
{
    //Incrementamos el contador de cambio de valor
    globals.spiderMovementTime.timeChangeCounter += globals.deltaTime;

    //Si ha pasado el tiempo necesario, cambiamos el valor del timer
    if(globals.spiderMovementTime.timeChangeCounter > globals.spiderMovementTime.timeChangeValue)
    {

        globals.spiderMovementTime.value--;

        //Reseteamos timeChanegCounter
        globals.spiderMovementTime.timeChangeCounter = 0;
    }


    if(globals.spiderMovementTime.value < 0)
    {
        element.canMove = true;     
        
        globals.spiderMovementTime.value = 0.2;
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

    //console.log(levelData[element.yPos][element.xPos]);

    if(levelData[element.yPos + 1][element.xPos] === 1)
    {
        element.isCollidingWithBottom = true;
        //console.log("MURO ABAJO");
    }
    else
    {
        element.isCollidingWithBottom = false;
        //console.log("NO HAY MURO ABAJO");
    }

    if(levelData[element.yPos - 1][element.xPos] === 1)
    {
        element.isCollidingWithTop = true;
        //console.log("MURO ARRIBA");
    }
    else
    {
        element.isCollidingWithTop = false;
        //console.log("NO HAY MURO ARRIBA");
    }

    if(levelData[element.yPos][element.xPos + 1] === 1)
    {
        element.isCollidingWithRight = true;
        //console.log("MURO DERECHA");
    }
    else
    {
        element.isCollidingWithRight = false;
        //console.log("NO HAY MURO DERECHA");
    }

    if(levelData[element.yPos][element.xPos - 1] === 1)
    {
        element.isCollidingWithLeft = true;
        //console.log("MURO IZQUIERDA");
    }
    else
    {
        element.isCollidingWithLeft = false;
        //console.log("NO HAY MURO IZQUIERDA");
    }

}

function checkIfIsCollidingWithPlayer(element)
{
    const player = globals.gameElements.find(element => element.id === ID.PLAYER_ID);

    switch(element.id)
    {
        case ID.MONEY_ID:
            if(element.xPos === player.xPos && element.yPos === player.yPos)
            {
                element.state = State.OFF;
                globals.score += 100;
                initMoney();
            }
            break;
        case ID.SPIDER_ID:
            if(element.xPos === player.xPos && element.yPos === player.yPos)
            {
                globals.life--;
                resetVariables();
                globals.gameState = Game.LOAD_PLAYING;
            }
            //Colisiona con la araña
            break;

        default:
            break;
    }

}

function resetVariables()
{
    globals.gameElements = [];
}
