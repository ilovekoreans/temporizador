input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    for (let index = 0; index < 10; index++) {
        tempo += -1
        basic.showNumber(0)
        basic.pause(100)
    }
})
basic.showNumber(0)
let tempo = 10
