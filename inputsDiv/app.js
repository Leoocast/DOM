import * as inputsfn from './inputsDiv.js'

document.getElementById('btnValidar').addEventListener('click', ()=> {
    const result = inputsfn.validateInputs(['div2', 'div1'])

    console.log(result)
})

document.getElementById('btnValidarElemento').addEventListener('click', ()=> {
    const result = inputsfn.validateInputs(['txt1', 'txt2'], true)

    console.log(result)
})

document.getElementById('btnBloquear').addEventListener('click', ()=> {
    // inputsfn.enableInputs(['div2', 'div1'], false)

    inputsfn.enableInputs(['txt1', 'txt2', 'flexRadioDefault1'], false, true)
})


document.getElementById('btnLimpiar').addEventListener('click', ()=> {

    inputsfn.clearInputs(['txt1', 'txt2', 'flexRadioDefault1', 'dropdown'], true)

})