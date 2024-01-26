export const spiderMovement = {
    POSSIBLE_MOVEMENTS: [0, 1, 2, 3],
}

export const moneyPos = {
    xPos: [3, 3, 3, 14, 14, 14],
    yPos: [1, 4, 10, 1, 4, 10],
}

export const spiderPos = {
    xPos: [1, 15, 1, 15],
    yPos: [1, 10, 1, 10],
}

export const State = {
    OFF: -1,
    STILL: 1,
    UP: 2,
    DOWN: 3,
    LEFT: 4,
    RIGHT: 5,
}

export const ID = {
    PLAYER_ID: 0,
    SPIDER_ID: 1,
    MONEY_ID: 2,
}

export const Icons = {
    PLAYER: "\u{1F474}",
    SPIDER: "\u{1F577}",
    MONEY:  "\u{1F4B5}",
    LIFE:   "\u{1F49A}",
    WALL:   "\u2B1C",
    SCORE:  "SCORE",
}

export const Game = {
    OVER: -1,
    PLAYING: 0,
    LOAD_PLAYING: 1,
};

export const Tile = {
    TILE_16: 0,
};

export const Map = {
    NUM_FIL: 12,
    NUM_COL: 17,
    BRICKSIZE: 16,
    X_OFFSET: 30,
    Y_OFFSET: 50,
};

export const Block = {
    PASILLO: 0,
    MURO: 1,
};

export const FPS = 30;

export const Key = {
    UP: 38,
    LEFT: 37,
    DOWN: 40,
    RIGHT: 39
}