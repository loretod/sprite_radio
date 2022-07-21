input.onGesture(Gesture.LogoUp, function () {
    cursor.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    cursor.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    cursor.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    cursor.change(LedSpriteProperty.Y, -1)
})
let cursor: game.LedSprite = null
cursor = game.createSprite(2, 2)
let targets = [game.createSprite(0, 0), game.createSprite(0, 2), game.createSprite(5, 5)]
basic.forever(function () {
    if (cursor.isTouching(targets[0])) {
        basic.showIcon(IconNames.Heart)
        basic.clearScreen()
        basic.pause(1000)
    }
})
