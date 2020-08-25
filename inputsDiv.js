export function validateByIdDiv(div){

    const fn = (input, flag) => {
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

    const result = pipeDiv(div, fn, true)

    return result
}

export function validateByIdsDiv(arrayDivs){
    for (const div of arrayDivs) {
        const result = validateByIdDiv(div)

        if(!result) return result
    }

    return true
}

export function disableInputsDiv(div){
    pipeDiv(div, r => r.setAttribute('disabled', 'disabled'))
}

export function pipeDiv(div, fn, returns = false){
    div = typeof(div) === typeof({}) ? div : document.getElementById(div)
    
    const inputs  = div.querySelectorAll('input, select')

    let flag = true

    for (const input of inputs) {
        if (returns) {
            const result = fn(input, flag) 
            if(!result) return false
        } else
            fn(input)
    }

    if(returns)
        return true
}