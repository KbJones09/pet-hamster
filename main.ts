let health = 10
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # # . .
        . . # # #
        . . # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # . .
        . . # # #
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # . . .
        . # # # .
        . # # . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        . # # # .
        . # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        # # # . .
        . # # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        # # # . .
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # #
        . # # # .
        . . # # .
        . . . . .
        `)
    if (health == 0) {
        basic.showLeds(`
            . . . . .
            . . # # #
            . # # # #
            . . # . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # .
            . # . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # .
            `)
        basic.pause(2000)
        basic.showString("YOUR TRASH!")
    }
})
basic.forever(function () {
    health += -2
    basic.pause(2000)
})
