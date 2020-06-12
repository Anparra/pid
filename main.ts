namespace SpriteKind {
    export const rayF = SpriteKind.create()
    export const rayU = SpriteKind.create()
    export const rayD = SpriteKind.create()
}
function PID () {
    Kp = 0.1
    currentVelocityX = mySprite.vx
    desiredVelocityX = 50
    epVX = desiredVelocityX - currentVelocityX
    mySprite.vx = epVX * Kp
    currentVelocityY = mySprite.vy
    desiredVelocityY = 0
    epVY = desiredVelocityY - currentVelocityY
    mySprite.vy = epVY * Kp
}
sprites.onOverlap(SpriteKind.rayD, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.setVelocity(50, -50)
})
sprites.onOverlap(SpriteKind.rayU, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.setVelocity(50, 0)
})
function background () {
    scene.setTile(7, img`
. . . 6 6 6 6 6 6 6 6 6 6 . . . 
. 6 6 7 7 7 7 7 7 7 7 7 7 6 6 . 
. 6 7 7 7 7 7 7 7 7 7 7 7 7 6 . 
6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
6 7 7 7 7 7 7 7 7 7 7 7 7 7 7 6 
6 7 6 7 7 7 7 7 7 7 7 7 7 6 7 6 
8 6 7 7 7 7 7 7 7 7 7 7 7 7 6 8 
8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 
6 7 6 7 7 7 6 7 7 7 7 6 7 7 7 6 
6 8 6 7 7 6 7 7 7 6 7 7 6 6 8 6 
8 6 6 7 6 6 7 7 6 6 6 7 6 6 6 8 
8 6 8 6 6 6 7 6 6 6 6 6 8 6 6 8 
8 8 6 6 8 6 6 6 8 6 6 6 8 8 8 8 
. f 6 e e 8 6 6 8 8 6 8 8 8 f . 
. . f e e e 6 e 8 8 f f 8 f . . 
. . . f f f 8 e e f f f f . . . 
`, true)
    scene.setTile(15, img`
d 1 d d d d d d d 1 d d d d d d 
d 1 d d d d d d d 1 d d d d d d 
d 1 d d d d d d d 1 d d d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d 1 d d d d d d d 1 d d 
d d d d d 1 d d d d d d d 1 d d 
d d d d d 1 d d d d d d d 1 d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d 1 d d d d d d d 1 d d d d d d 
d 1 d d d d d d d 1 d d d d d d 
d 1 d d d d d d d 1 d d d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d d d 1 d d d d d d d 1 d d 
d d d d d 1 d d d d d d d 1 d d 
d d d d d 1 d d d d d d d 1 d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`, true)
    scene.setTile(9, img`
c b d b b b b b b b b b b d b b 
c b d b b b b b b b b b b b d b 
c b d b b b b b b b b b b b b d 
c b d b b b b b b b b b b b b b 
c b d b b b b b b b b b b b b b 
c b d b b b b b b b b b b b b b 
c b d b b b b b b b b b b b b b 
c b d b b b b b b b b b b b b b 
c b d b b b b b b b b b b b b b 
c b d b b b b b b b b b b b b b 
c b d b b b b b b b b b b b b b 
c b d b b b b b b b b b b b b b 
c b d b b b b b b b b b b b b b 
c b d b b b b b b b b b b b b d 
c b d b b b b b b b b b b b d b 
c b d b b b b b b b b b b d b b 
`, true)
    scene.setTile(3, img`
5 4 4 5 5 4 4 4 4 2 2 2 4 4 4 4 
4 4 4 4 4 5 5 4 2 2 2 2 4 4 4 5 
4 2 2 2 4 4 5 4 2 2 4 4 5 5 5 5 
2 2 4 2 4 4 5 4 2 2 4 5 5 5 5 4 
2 2 2 2 4 4 5 4 2 2 4 4 5 5 4 4 
4 2 2 2 4 5 5 4 4 4 4 4 4 4 4 2 
2 2 2 4 4 5 5 5 4 4 2 2 2 2 2 2 
4 2 2 4 5 5 5 5 4 2 2 4 2 2 2 4 
5 4 4 4 4 4 4 5 5 4 2 2 2 4 4 4 
4 4 4 2 2 2 4 4 5 5 4 4 4 4 5 5 
4 2 2 2 2 2 2 2 4 5 5 5 5 5 5 5 
5 4 4 2 4 2 2 4 4 5 5 5 4 4 4 5 
5 5 4 2 2 2 4 4 4 5 5 4 2 2 2 4 
4 5 4 4 4 4 5 5 5 5 4 2 4 2 2 4 
4 5 5 5 5 5 5 4 4 4 2 4 2 4 2 4 
4 5 5 5 4 4 4 4 2 2 2 2 4 2 4 4 
`, true)
}
sprites.onOverlap(SpriteKind.rayF, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.setVelocity(50, 50)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("x=" + Math.trunc(mySprite.x) + "y=" + Math.trunc(mySprite.y))
})
let projectile: Sprite = null
let rayD2: Sprite = null
let rayU2: Sprite = null
let rayF2: Sprite = null
let epVY = 0
let desiredVelocityY = 0
let currentVelocityY = 0
let epVX = 0
let desiredVelocityX = 0
let currentVelocityX = 0
let Kp = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f . . . 
. . f e e e e e d d d f . . . . 
. . . . f 4 d d e 4 e f . . . . 
. . . . f e d d e 2 2 f . . . . 
. . . f f f e e f 5 5 f f . . . 
. . . f f f f f f f f f f . . . 
. . . . f f . . . f f f . . . . 
`, SpriteKind.Player)
scene.setTileMap(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 7 
7 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 8 
9 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
mySprite.setPosition(8, 296)
scene.cameraFollowSprite(mySprite)
mySprite.setVelocity(100, 0)
background()
PID()
game.onUpdateInterval(100, function () {
    rayF2 = sprites.createProjectileFromSprite(img`
. . . . . d d . . . . . . . . . 
. . . . . d d d . . . . . . . . 
. . . . . d d d d . . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d d . . . . . 
. . . . . d d d d d d d . . . . 
. . . . . d d d d d d d d . . . 
. . . . . d d d d d d d d d . . 
. . . . . d d d d d d d d d . . 
. . . . . d d d d d d d d . . . 
. . . . . d d d d d d d . . . . 
. . . . . d d d d d d . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d . . . . . . . 
. . . . . d d d . . . . . . . . 
. . . . . d d . . . . . . . . . 
`, mySprite, 300, 0)
    rayF2.setKind(SpriteKind.rayF)
    rayU2 = sprites.createProjectileFromSprite(img`
. . . . . d d . . . . . . . . . 
. . . . . d d d . . . . . . . . 
. . . . . d d d d . . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d d . . . . . 
. . . . . d d d d d d d . . . . 
. . . . . d d d d d d d d . . . 
. . . . . d d d d d d d d d . . 
. . . . . d d d d d d d d d . . 
. . . . . d d d d d d d d . . . 
. . . . . d d d d d d d . . . . 
. . . . . d d d d d d . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d . . . . . . . 
. . . . . d d d . . . . . . . . 
. . . . . d d . . . . . . . . . 
`, mySprite, 300, -100)
    rayU2.setKind(SpriteKind.rayU)
    rayD2 = sprites.createProjectileFromSprite(img`
. . . . . d d . . . . . . . . . 
. . . . . d d d . . . . . . . . 
. . . . . d d d d . . . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d d d . . . . . 
. . . . . d d d d d d d . . . . 
. . . . . d d d d d d d d . . . 
. . . . . d d d d d d d d d . . 
. . . . . d d d d d d d d d . . 
. . . . . d d d d d d d d . . . 
. . . . . d d d d d d d . . . . 
. . . . . d d d d d d . . . . . 
. . . . . d d d d d . . . . . . 
. . . . . d d d d . . . . . . . 
. . . . . d d d . . . . . . . . 
. . . . . d d . . . . . . . . . 
`, mySprite, 300, 100)
    rayD2.setKind(SpriteKind.rayD)
})
game.onUpdateInterval(300, function () {
    projectile = sprites.createProjectileFromSide(img`
. . f f f . . . . . . . . . . . 
f f f c c . . . . . . . . f f f 
f f c c . . c c . . . f c b b c 
f f c 3 c c 3 c c f f b b b c . 
f f b 3 b c 3 b c f b b c c c . 
. c b b b b b b c f b c b c c . 
. c b b b b b b c b b c b b c . 
c b 1 b b b 1 b b b c c c b c . 
c b b b b b b b b c c c c c . . 
f b c b b b c b b b b f c . . . 
f b 1 f f f 1 b b b b f c c . . 
. f b b b b b b b b c f . . . . 
. . f b b b b b b c f . . . . . 
. . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, -32, 0)
    projectile.setKind(SpriteKind.Enemy)
    projectile.y = Math.randomRange(10, 600)
})
