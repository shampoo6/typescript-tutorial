import '@/assets/css/index.css'
import img from '@/assets/img/1.png'

function component(): HTMLElement {
    const div = document.createElement('div')
    div.className = 'box'
    return div
}

function imgComponent(): HTMLImageElement{
    let el = new Image()
    el.src = img
    el.className = 'img'
    return el
}

document.body.appendChild(component())
document.body.appendChild(imgComponent())