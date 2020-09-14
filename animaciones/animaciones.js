export function show(id){
    document.getElementById(id).classList.add('animate__animated', 'animate__fadeIn')
}


export function hide(id){
    document.getElementById(id).classList.add('animate__animated', 'animate__fadeOut')
}

export const slideDown = (id, duration = 2000) => {

    const target = document.getElementById(id)

    target.style.removeProperty('display')
    let display = window.getComputedStyle(target).display
    
    if (display === 'none') 
        display = 'block'
    
    target.style.display = display

    let height = target.offsetHeight
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    target.style.overflow = 'hidden'

    target.offsetHeight
    target.style.boxSizing = 'border-box'
    target.style.transitionProperty = "height, margin, padding"
    target.style.transitionDuration = duration + 'ms'
    target.style.height = height + 'px'
    target.style.removeProperty('padding-top') 
    target.style.removeProperty('padding-bottom')
    target.style.removeProperty('margin-top')
    target.style.removeProperty('margin-bottom')

    window.setTimeout( () => {
        target.style.removeProperty('height')
        target.style.removeProperty('overflow')
        target.style.removeProperty('transition-duration')
        target.style.removeProperty('transition-property')
      }, duration)
}

export const slideUp = (id, duration = 2000) => {

    const target = document.getElementById(id)

    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'1
    target.style.boxSizing = 'border-box'
    target.style.height = target.offsetHeight + 'px'
    target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = "0px!important"
    
    const style = target.attributes.style.value + ' margin:0!important;'
    
    target.setAttribute('style', style)

    window.setTimeout( () => {
      target.style.display = 'none'
      target.style.removeProperty('height')
      target.style.removeProperty('padding-top')
      target.style.removeProperty('padding-bottom')
      target.style.removeProperty('margin-top')
      target.style.removeProperty('margin-bottom')
      target.style.removeProperty('overflow')
      target.style.removeProperty('transition-duration')
      target.style.removeProperty('transition-property')
 
    }, duration)
      
}
  