const grid = document.querySelector('.cards')

const cardsArray = [
    'melissa',
    'kauan',
    'caio',
    'caua',
    'marcos',
    'well',
    'leandro',
    'marina',
    'kelvin',
    'yuri'
]

const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

let firstCard = '', secondCard = ''

const checkEnd = () => {
    const disabledCards = document.querySelectorAll('.disabled')
    const game = document.querySelector('.Game')
    const acabado = document.getElementById('jogo-acabado')
    const tempo = document.getElementById('tempo')
    const titulo = document.getElementById('titulo')

    if (disabledCards.length === 20) {
        setTimeout(() => {
            game.style.opacity = '0'
            setTimeout(() => {
                acabado.style.opacity = '1'
                tempo.style.opacity = '1'
                titulo.style.opacity = '0'
            }, 800);
        }, 800);
    }
}

const checkCards = () => {
    const first = firstCard.getAttribute('data-card')
    const second = secondCard.getAttribute('data-card')

    if (first === second) {
        setTimeout(() => {
            firstCard.firstChild.classList.add('disabled')
            secondCard.firstChild.classList.add('disabled')

            firstCard = ''
            secondCard = ''

            checkEnd()
        }, 300);
    } else {
        setTimeout(() => {
            firstCard.classList.remove('reveal')
            secondCard.classList.remove('reveal')

            firstCard = ''
            secondCard = ''
        }, 600);
    }
}

const revealCard = ({ target }) => {
    if (target.parentNode.className.includes('reveal')) {
        return
    }

    if (firstCard === '') {
        target.parentNode.classList.add('reveal')
        firstCard = target.parentNode
    } else if (secondCard === '') {
        target.parentNode.classList.add('reveal')
        secondCard = target.parentNode
        checkCards()
    }

}

const createCard = (cardUnit) => {
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url(../assets/${cardUnit}.jpg)`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)

    card.setAttribute('data-card', cardUnit)

    return card
}

const load = () => {
    const duplicateCardArray = [...cardsArray, ...cardsArray]

    const shuffArray = duplicateCardArray.sort(() => Math.random() - 0.5)

    shuffArray.forEach((cardUnit) => {
        const card = createCard(cardUnit)

        grid.appendChild(card)

    })
}

load()