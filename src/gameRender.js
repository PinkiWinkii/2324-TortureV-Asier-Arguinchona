import globals from "./globals.js";
import {Game, Icons, Map} from "./constants.js";

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

   //console.log("RENDER GAME");
   globals.ctx.fillStyle = 'white';
   globals.ctx.fillText("SCORE: ", 15, 15)
   globals.ctx.fillText(SCORE, 140, 15); 

   renderMap();
}

function renderMap()
{
    const brickSize = 16;
    const levelData = globals.level.data;

    const xOffset = 30;
    const yOffset = 50;

    for(let i = 0; i < Map.NUM_FIL; i++)
    {
        for(let j = 0; j < Map.NUM_COL; j++)
        {
            if(levelData[i][j] === 1)
            {
                globals.ctx.fillText(Icons.WALL, j*brickSize + xOffset, i*brickSize + yOffset);
            }

        }
    }
}