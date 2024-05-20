const butons = document.querySelectorAll('.btn');
const display = document.querySelector('#digits')

export function getValue(e) {
    
    let currentBtn = e.target.value;
    let nums = '';
    let operator = '';

    if(currentBtn == '') {
        display.textContent = '';
        nums = '';
        operator = '';
    }

    if(currentBtn !== undefined) {
        if(currentBtn !== '+' && currentBtn !== '-' && currentBtn !== '*' && currentBtn !== '/' && currentBtn !== '=') {
            nums += e.target.value;
            display.textContent += nums;
        }
        if(currentBtn == '+' || currentBtn == '-' || currentBtn == '*' || currentBtn == '/') {
            operator = currentBtn;
            display.textContent += nums + ' ' + operator + ' ';
        }
        if(currentBtn == '=') {
            
            let finalResult = 0;
            let expression = display.textContent;
            let [firstNum, op, secondNum] = expression.split(' ');

            const operators = {
                '-': () => (Number(firstNum) - Number(secondNum)).toFixed(2),
                '+': () => (Number(firstNum) + Number(secondNum)).toFixed(2),
                '*': () => (Number(firstNum) * Number(secondNum)).toFixed(2),
                '/': () => (Number(firstNum) / Number(secondNum)).toFixed(2)
            } 

            finalResult = operators[op]();
            display.textContent = finalResult;
    
        }

    } 
}