basic.forever(function () {
    serial.writeValue("e", pins.analogReadPin(AnalogPin.P0))
})
