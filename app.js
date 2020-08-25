import * as inputsfn from './inputsDiv.js'


document.getElementById('btnValidar').addEventListener('click', ()=> {


    const result = inputsfn.validateByIdsDiv(['div1', 'div2'])

    console.log(result)
})
