export default function calculator(state, val) {

    let fixNumber = /[0-9]/

    if(val) {

        if(val === 'AC') {
            return {
                ButtonNumber: '',
                NumberDisplay: ''
            }
        }

        if(!!val.match(fixNumber)) {
            return { 
                NumberDisplay: state.NumberDisplay + val
            }
        }

        

        if(val === 'del') {
            return { NumberDisplay: state.NumberDisplay.slice(0,-1) }
        }

        if(val === '+/-') { return { NumberDisplay: state.NumberDisplay * -1} }

        if(val === '+') { return operation(state.NumberDisplay, val, '+') }

        if(val === '-') { return operation(state.NumberDisplay, val, '-') }

        if(val === '÷') { return operation(state.NumberDisplay, val, '÷') }

        if(val === 'x') { return operation(state.NumberDisplay, val, 'x') }

        if(val === '%') { return operation(state.NumberDisplay, val, '%') }

        if(val === '=') {

            if(state.NumberDisplay === '0÷0') {
                return { NumberDisplay: 'Fuck You' }
            }

            let lastNumber = String(state.NumberDisplay).slice(-1)
            if(lastNumber === '+' || lastNumber === '-' || lastNumber === '÷' || lastNumber === 'x') { 
                return { NumberDisplay: eval(state.NumberDisplay.slice(0,-1).replace('x','*').replace('÷','/'))}
            }
            return { NumberDisplay: eval(state.NumberDisplay.replace('x','*').replace('÷','/'))}
        }

        return {
            NumberDisplay: val
        }
    }
}

function operation(NumberDisplay, val, op) {
    let lastNumber = String(NumberDisplay).slice(-1)
    if(val === op) {
        if(NumberDisplay != '') {
            if(lastNumber === op) {
                return { NumberDisplay: NumberDisplay }
            }
            
            if(lastNumber === '+' || lastNumber === '-' || lastNumber === '÷' || lastNumber === 'x') {
                return { NumberDisplay: NumberDisplay.slice(0,-1) + val }
            }

            return { NumberDisplay: NumberDisplay + val }
            console.log(NumberDisplay)
        }
    }
}