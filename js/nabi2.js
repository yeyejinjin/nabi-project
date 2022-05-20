const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 14000
const breatheTime = 4000
const holdTime = 4000

breatheAnimation()

function breatheAnimation() {
    text.innerText = 'Breath In'
    container.className = 'container grow'

    setTimeout(() => {
        text.innerText = 'Hold'

        setTimeout(() => {
            text.innerText = 'Breathe Out'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheTime)
}

setInterval(breatheAnimation, totalTime)