import './styles.scss'
import img from './matrix.png'
import img2 from './door.jpg'


function rootStyle(){
    const elemRoot = document.getElementById('root')
    elemRoot.classList.add('container')
}

function titleComponent(){
    const elemH1 = document.createElement('h1')
    elemH1.innerHTML = 'Hello world 20'
    elemH1.classList.add('title')
    return elemH1
}

function imageComponent(){
    const elemImg = new Image(1200,800)
    elemImg.src = img
    return elemImg
}

function imageComponent2(){
    const elemImg = new Image(482,719)
    elemImg.src = img2
    return elemImg
}

rootStyle()
document.getElementById('root').appendChild(titleComponent())
document.getElementById('root').appendChild(imageComponent())
document.getElementById('root').appendChild(imageComponent2())