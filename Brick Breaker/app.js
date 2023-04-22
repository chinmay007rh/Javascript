const grid = document.querySelector('.grid')
const brickWidth = 100
const brickHeight = 20
const ballDiameter=20
const boardwidth =560
const boardHeight =300
let timerId
let xDirection =2
let yDirection =2

const userStart = [230, 10]
let currentPosition = userStart

const ballStart =[260,30]
let currentBallPosition = ballStart

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

const user = document.createElement('div')
user.classList.add('user')
drawUser()
grid.appendChild(user)


function drawUser(){
  user.style.left = currentPosition[0] + 'px'
  user.style.bottom = currentPosition[1] + 'px'
}

function drawBall(){
  ball.style.left = currentBallPosition[0] + 'px'
  ball.style.bottom = currentBallPosition[1] + 'px'
}

function moveUser(e){
  switch(e.key){
    
    case 'ArrowLeft':
      if(currentPosition[0]>0){
      currentPosition[0] -= 10
      drawUser()
      }
      break;
      
      case 'ArrowRight':
        if(currentPosition[0]<boardwidth -brickWidth)
        currentPosition[0] += 10
        drawUser()
        break;
    }
  
}

document.addEventListener('keydown',moveUser)

const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)

function moveBall(){
  currentBallPosition[0] += xDirection
  currentBallPosition[1] += yDirection
  drawBall()
  checkForCollision()
}

timerId= setInterval(moveBall,30)

function checkForCollision(){
  if (currentBallPosition[0] >= (boardwidth - ballDiameter) || 
      currentBallPosition[1] >= (boardHeight - ballDiameter)||
      currentBallPosition[0] <= 0)

  {
    changeDirection()
  }
  if(currentBallPosition[1] <=0){
    clearInterval(timerId)
  }
}

function changeDirection(){

  if(xDirection ===2 && yDirection ===2){
    yDirection =-2
    return
  }
  if(xDirection ===2 && yDirection === -2){
    xDirection =-2
    return
  }
  if(xDirection === -2 && yDirection === -2){
    yDirection =2
    return
  }
  if(xDirection === -2 && yDirection ===2){
    xDirection =2
    return
  }
}