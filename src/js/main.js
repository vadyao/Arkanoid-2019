const log = console.log
// racquet glide
var x = 0
const ball = {
    x: 10,
    y: 10,
    dir_x: 'Right',
    dir_y: 'Up'
}
const ballDom = document.querySelector('.ball')
let bricks = document.querySelectorAll('.brick')
let i = 0
let k = 0
for (let brick of bricks) {
    i++
    k++
    brick.style.top = k * 40 + 'px'
    brick.style.left = 40 + 'px'


    if (i > 3) brick.style.left = 80 + 'px'
    if (i > 6) brick.style.left = 120 + 'px'
    if (i > 9) brick.style.left = 160 + 'px'
    if (i > 12) brick.style.left = 200 + 'px'
    if (i > 15) brick.style.left = 240 + 'px'
    if (i > 18) brick.style.left = 280 + 'px'
    if (i > 21) brick.style.left = 320 + 'px'
    if (i > 24) brick.style.left = 360 + 'px'
  

    
    if (i == 3 || i == 6 || i == 9 || i==12||i==15||i==18||i==21||i==24) k = 0
        log(brick)
}

window.addEventListener('keydown', (event) => {

    const racquet = document.querySelector('.racquet')

    if (event.key == 'ArrowRight') x++
    if (event.key == 'ArrowLeft') x--



    if (x < 0) x = 0
    if (x > 32) x = 32
    log(x)

    racquet.style.left = x * 10 + 'px'
})

setInterval(() => {
    if (ball.dir_x == 'Right') ball.x++
    if (ball.dir_x == 'Left') ball.x--
    if (ball.x >= 42) ball.dir_x = 'Left'
    if (ball.x <= -2) ball.dir_x = 'Right'
    if (ball.dir_y == 'Up') ball.y--
    if (ball.dir_y == 'Down') ball.y++
    if (ball.y <= -1) ball.dir_y = 'Down'
    if (ball.y > 60 && check()) ball.dir_y = 'Up'

    for (let brick of bricks) {
        let brick_x = brick.style.left
        brick_x = brick_x.replace('px', '')
        brick_x = parseInt(brick_x)
        brick_x = brick_x / 10

        let brick_y = brick.style.top
        brick_y = brick_y.replace('px', '')
        brick_y = parseInt(brick_y)
        brick_y = brick_y / 10

        if (
            ball.x > brick_x - 2 && ball.x < brick_x + 2 &&
            ball.y > brick_y - 2 && ball.y < brick_y + 2
        ) {
            brick.style.background = 'red'
            if (ball.dir_x == 'Right') ball.dir_x = 'Left'
            if (ball.dir_x == 'Left') ball.dir_x = 'Right'
            if (ball.dir_y == 'Up') ball.dir_y = 'Down'
            if (ball.dir_y == 'Down') ball.dir_y = 'Up'
            brick.remove()
            bricks = document.querySelectorAll('.brick')
        }
        //log(brick_x/10,  ball.x)
    }
    //ball.y--
    ballDom.style.left = ball.x * 10 + 'px'
    ballDom.style.top = ball.y * 10 + 'px'
}, 50)

function check() {
    if (ball.x > x && ball.x < x + 10) return true
    else location.reload()
}
// brick_x - 20 (шириина мяча)         brick_x + 20 (ширина кирпича)
//