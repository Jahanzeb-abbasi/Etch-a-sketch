function gridMaker(num) {
    for (let i = 1; i <= num; i++) {
        for(let j = 1; j <= num; j++) {
            const newDiv = document.createElement('div')
            newDiv.classList.add('grid-square')
            document.querySelector('.grid-container').appendChild(newDiv)
            // newDiv.style.backgroundColor = 'red'
            newDiv.style.width = `${800/num}px`
            newDiv.style.height = `${700/num}px`
            clickEffect(newDiv)
            gridText(num)
        }
    }
}

const gridSize = document.querySelector('.grid-size')
gridSize.addEventListener('click', () => {
    reset();
    let gridRC = prompt('Enter a Grid Size number!')
    while(gridRC > 60) {
        gridRC = prompt('Enter a number below 60')
    }
    gridMaker(gridRC)
})

function clickEffect(gridDiv) {
    gridDiv.addEventListener('mouseenter',() => {
        const red = Math.floor(Math.random()*257)
        const blue = Math.floor(Math.random()*257)
        const green = Math.floor(Math.random()*257)
        gridDiv.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    })
}

function reset() {
    const mainDiv = document.querySelector('.grid-container')
    mainDiv.innerHTML = ''
}

function gridText(num) {
    const text = document.querySelector('.options-desc')
    text.textContent = `${num}x${num}`
}

gridMaker(20)