const pianoKeys = document.querySelectorAll('.pianoKeys .key')

const volume = document.querySelector('.volume input')
const showKeys = document.querySelector('.showKeys input')

let audio = new Audio('src/tunes/a.wav')

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`
    audio.play()
}

pianoKeys.forEach((key) => {
    console.log(key.dataset.key)
    key.addEventListener('click', () => playTune(key.dataset.key))
})
const handleVolume = (e) => {
audio.volume = e.target.value
}

  
volume.addEventListener('input', handleVolume)

showKeys.addEventListener('click', showHideKeys())