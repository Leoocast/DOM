export function validateInputsDiv(divs){

    if (divs instanceof Array) {
        for (const div of divs) {
            const result = validateInputsDiv(div)
    
            if(!result) return result
        } 
        return true
    } else {
        const fn = (input) => {
            let flag = true
            switch (input.type) {
                case 'text':
                case 'number':
                case 'select-one':
                    flag = !(input.value === '' || input.value === '0')
                    break
                case 'radio':
                case 'checkbox':
                    flag = input.checked
                    break
                case 'file':
                    flag = !(input.files.length < 1) 
                    break
            }
            return flag
        }
    
        const result = pipeInputsDiv(divs, fn, true)
    
        return result
    }
}

export function enableInputsDiv(div, enable = true){
    if (div instanceof Array) 
        div.forEach(r => enableInputsDiv(r, enable))
    else
        pipeInputsDiv(div, r => {
            if (enable) 
                r.removeAttribute('disabled')
             else 
                r.setAttribute('disabled', 'disabled')
        })
}

export function pipeInputsDiv(div, fn, returns = false){
    div = typeof(div) === typeof({}) ? div : document.getElementById(div)
    
    const inputs  = div.querySelectorAll('input, select')

    for (const input of inputs) {
        if (returns) {
            if(!fn(input)) return false
        } else
            fn(input)
    }

    if(returns)
        return true
}