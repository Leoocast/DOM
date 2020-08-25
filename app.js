import * as inputsfn from './inputsDiv.js'


document.getElementById('btnValidar').addEventListener('click', ()=> {


    const result = inputsfn.validateInputsDiv(['div2', 'div1'])

    console.log(result)
})



document.getElementById('btnBloquear').addEventListener('click', ()=> {
    const result = inputsfn.enableInputsDiv(['div2', 'div1'], true)

    console.log(result)
})
