// export class _ {
//     constructor(id){
//         this.id = id
//         this.el = document.getElementById(id)
//     }

//     show(){
//         this.el.classList.add('animate__animated', 'animate__fadeIn')
//     }

//     hide(){
//         // this.el.classList.remove('animate__fadeIn', 'animate__animated')
//         this.el.classList.add('animate__animated', 'animate__fadeOut')
//     }
// }

export function show(id){
    document.getElementById(id).classList.add('animate__animated', 'animate__fadeIn')
}


export function hide(id){
    document.getElementById(id).classList.add('animate__animated', 'animate__fadeOut')
}

export const slideDown = (id, duration = 2000) => {

    const target = document.getElementById(id)

    target.style.removeProperty('display')

    const oldHeight = target.offsetHeight

    const style = {
        display : 'block',
        overflow : 'hidden',
        height : 0,
        boxSizing : 'border-box',
        transition : `height ${duration}ms ease`
    }

    Object.assign(target.style, style)

    //No sé que hace, pero funciona
    target.offsetHeight

    target.style.height = `${oldHeight}px`
}

export const slideUp = (id, duration = 2000) => {

    const target = document.getElementById(id)

    const oldHeight = target.offsetHeight

    const style = {
        overflow : 'hidden',
        transition : `height ${duration}ms ease`,
        height : `${0}px`,
    }

    Object.assign(target.style, style)

    const height = target.offsetHeight

    console.log(height, oldHeight)
    setTimeout(() => {
        target.style.display = 'none'
        target.style.removeProperty('height')
    }, duration + 2000000)
}
  