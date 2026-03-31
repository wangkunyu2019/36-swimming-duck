input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        basic.showIcon(IconNames.Duck)
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 9; index++) {
        basic.showLeds(`
            . . # . .
            . # # . #
            # . # # .
            . # # . #
            . . # . .
            `)
        basic.showLeds(`
            . # . . .
            # # . # .
            . # # . .
            # # . # .
            . # . . .
            `)
        basic.showLeds(`
            # . . . .
            # . # . .
            # # . . .
            # . # . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            # . . . .
            . # . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # . . . .
            . . . . .
            # . . . .
            . . . . .
            `)
    }
})
