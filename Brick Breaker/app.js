const grid = document.querySelector('.grid')


function addBrick(){
    const brick =document.createElement('div')
    brick.classList.add('brick')
    brick.style.left ="100px"
    brick.style.bottom = "5px"
    grid.appendChild(brick)
}
addBrick()