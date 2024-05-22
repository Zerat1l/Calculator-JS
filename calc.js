const display = document.querySelector('#digits')

export function getValue(e) {

    let input = e.target.value;

    if(e.target.tagName == 'BUTTON' && input == 'clear') {
        display.textContent = '';
    }

    if(e.target.tagName == 'BUTTON' && display.textContent.length <= 15) {

        if(input == '=') {
            let result = eval(display.textContent);
            display.textContent = result;
        }
    
        if(Number(input) || input == '.' || input == '0') {
            if(display.textContent.length == 0 && input == '.') {
                display.textContent += `0${input}`
            } else {
                display.textContent += input
            }
        }else if(display.textContent.length > 0 && input !== '=') {
            display.textContent += input
        }
    }else if(display.textContent.length > 15){
        display.textContent = 'Max digits reached!'
    }
      
}