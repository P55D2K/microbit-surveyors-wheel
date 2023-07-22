input.setAccelerometerRange(AcceleratorRange.OneG)
basic.forever(function () {
    basic.showNumber(input.acceleration(Dimension.X))
})
