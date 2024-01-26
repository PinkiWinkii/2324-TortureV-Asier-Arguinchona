import {Key} from "./constants.js" 
import globals from "./globals.js";

export function keydownHandler(event)
{
    //console.log(event.keyCode);
    switch(event.keyCode)
    {
        case Key.UP:
            globals.action.moveUp = true;
            break;

        case Key.DOWN:
            globals.action.moveDown = true;
            break;

        case Key.LEFT:
            //console.log("Left pressed");
            globals.action.moveLeft = true;
            break;

        case Key.RIGHT:
            globals.action.moveRight = true;
            break;
        
        default:
            break;
    }
}