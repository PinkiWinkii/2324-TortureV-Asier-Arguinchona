import globals from "./globals.js";
import {Game, Icons, Map} from "./constants.js";
import Player from "./Element.js";

export default function render()
{
    switch(globals.gameState)
    {
        case Game.LOAD_PLAYING:
            //Cargamos
            loadPlaying();
            break;

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
    //Borramos la pantalla entera
    globals.ctx.clearRect(0,0, globals.canvas.width, globals.canvas.height);

    const SCORE = globals.score;

    //console.log("RENDER GAME");
    globals.ctx.fillStyle = 'white';
    globals.ctx.font = '14px emulogic';
    globals.ctx.fillText("SCORE: ", 15, 15)
    globals.ctx.fillText(SCORE, 140, 15); 

    renderMap();

    renderElements();
}

function renderMap()
{
    const levelData = globals.level.data;

    for(let i = 0; i < Map.NUM_FIL; i++)
    {
        for(let j = 0; j < Map.NUM_COL; j++)
        {
            if(levelData[i][j] === 1)
            {
                globals.ctx.fillText(Icons.WALL, j*Map.BRICKSIZE + Map.X_OFFSET, i*Map.BRICKSIZE + Map.Y_OFFSET);
            }

        }
    }
}

function renderElements()
{
    for(let i = 0; i < globals.gameElements.length; ++i)
    {
        const element = globals.gameElements[i];

        drawElement(element);
    }
}

function drawElement(element)
{
    const levelData = globals.level.data;

    for(let i = 0; i < Map.NUM_FIL; i++)
    {
        for(let j = 0; j < Map.NUM_COL; j++)
        {
            if(i === element.yPos && j === element.xPos)
            {
                globals.ctx.fillText(Icons.PLAYER, i*Map.BRICKSIZE + Map.X_OFFSET, j*Map.BRICKSIZE + Map.Y_OFFSET);
            }
        }
    }
}