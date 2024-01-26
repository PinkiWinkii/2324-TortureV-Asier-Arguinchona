export default class Element
{
    constructor(id, state, icon, xInit, yInit, xPos, yPos)
    {
        this.id     = id;
        this.state  = state;
        this.icon   = icon;
        this.xInit  = xInit;
        this.yInit  = yInit;
        this.xPos   = xPos;
        this.yPos   = yPos;
        this.isCollidingRight   = false;
        this.isCollidingLeft    = false;
        this.isCollidingTop     = false;
        this.isCollidingBottom  = false;
        this.canMove            = true;
    }
}