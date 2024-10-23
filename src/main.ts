import { k } from "./kaboomCtx";

async function  gameSetup () {
    k.loadSprite("assets","./kirby-like.png",{
        sliceX: 9,
        sliceY: 10,
        anims: {
            kirbyCop: 0,
            kirbyInha: 1,
            kirbyWaton: 2,
            kirbyInhalaMov: { from: 3, to: 8, speed: 15, loop: true },
            starShoot: 9,
            flame: { from: 36, to: 37, speed: 4, loop: true },
            cosaConPatas: 18,
            cosaConPatasCaminata: {from: 18, to: 19, speed: 4, loop: true},
            pajaro: {from: 27, to: 28, speed: 4, loop: true},
        },
    });
}

gameSetup();
