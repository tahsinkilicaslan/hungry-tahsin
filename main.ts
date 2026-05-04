let hungryness = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        hungryness = 1 + hungryness
        basic.showNumber(hungryness)
    } else if (input.buttonIsPressed(Button.B)) {
        hungryness = 0
        basic.showNumber(hungryness)
    }
})
