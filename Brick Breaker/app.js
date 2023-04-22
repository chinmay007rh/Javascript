const grid = document.querySelector('.grid')
const brickWidth = 100
const brickHeight = 20

const userStart = [230, 10]
let currentPosition = userStart

class Brick {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis]
    this.bottomRight = [xAxis + brickWidth, yAxis]
    this.topLeft = [xAxis, yAxis + brickHeight]
    this.topRight = [xAxis + brickWidth, yAxis + brickHeight]
  }
}

const bricks = [
    new Brick(10, 270),
    new Brick(120, 270),
    new Brick(230, 270),
    new Brick(340, 270),
    new Brick(450, 270),
    new Brick(10, 240),
    new Brick(120, 240),
    new Brick(230, 240),
    new Brick(340, 240),
    new Brick(450, 240),
    new Brick(10, 210),
    new Brick(120, 210),
    new Brick(230, 210),
    new Brick(340, 210),
    new Brick(450, 210),

    
]

console.log(bricks)

function addBrick() {
  for (let i = 0; i < bricks.length; i++) {
    const brickElement = document.createElement('div')
    brickElement.classList.add('brick')
    brickElement.style.left = bricks[i].bottomLeft[0] + 'px'
    brickElement.style.bottom = bricks[i].bottomLeft[1] + 'px'
    grid.appendChild(brickElement)
  }
}

addBrick()

const userStick = document.createElement('div')
userStick.classList.add('userStick')
userStick.style.left = currentPosition[0] + 'px'
userStick.style.bottom = currentPosition[1] + 'px'
grid.appendChild(userStick)

