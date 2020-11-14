input.onButtonPressed(Button.A, function () {
    basic.showString("Hi")
    basic.showLeds(`
        # . # . .
        . . . # .
        . . . # .
        . . . # .
        # . # . .
        `)
    basic.showLeds(`
        # . . # .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . # . .
        # . . # .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . . . #
        . . # # .
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Bye")
    basic.showLeds(`
        . # . # .
        . . . . #
        . . . . #
        . . . . #
        . # . # .
        `)
    for (let index = 0; index < 3; index++) {
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.clearScreen()
    }
})
