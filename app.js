function gridMaker(num) {
    for (let i = 1; i <= num; i++) {
        for(let j = 1; j <= num; j++) {
            const newDiv = document.createElement('div')
            newDiv.classList.add('grid-square')
            document.querySelector('.grid-container').appendChild(newDiv)
            newDiv.style.backgroundColor = 'red'
            newDiv.style.width = `${700/num}px`
            newDiv.style.height = `${600/num}px`
            newDiv.textContent = 0+1
            clickEffect(newDiv)
        }
    }
}

const gridSize = document.querySelector('.grid-size')
gridSize.addEventListener('click', () => {
    gridMaker(prompt('Enter a Grid Size number!'))
})

function clickEffect(gridDiv) {
    gridDiv.addEventListener('mouseenter',() => {
        gridDiv.style.backgroundColor = 'yellow'
        console.log('In Event Listener, yellow bg')
    })
}