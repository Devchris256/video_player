const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pausa = document.querySelector('#pausa')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pausa.addEventListener('click', handlePausa)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)


function handlePlay(){
    $video.play()
    $play.hidden = true
    $pausa.hidden = false
    console.log('Le diste click al boton play')
            
}
function handlePausa(){
    $video.pause()
    $pausa.hidden = true
    $play.hidden = false
    console.log('Le diste click al boton pausa')
}
function handleBackward(){
    $video.currentTime = $video.currentTime - 10
    console.log('para atras 10 segundos', $video.currentTime)
}
function handleForward(){
    $video.currentTime = $video.currentTime + 10
    console.log('para adelante 10 segundos', $video.currentTime)
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded(){
    $progress.max = $video.duration
    console.log('ah cargado mi vido',$video.duration)
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
   // console.log('tiempo actual', $video.currentTime)//
}

$progress.addEventListener('input', hanleInput)

function hanleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}