const display = document.querySelector('input')

let buttons = document.querySelectorAll('button')


for(let button of buttons){
    button.addEventListener('click',()=>{
        if(button.innerHTML != 'AC' && button.innerHTML != 'DE'){
        display.value += button.innerHTML;
        }
        else{
            if(button.innerHTML == 'AC'){
                clearAll()
            }
            else{
                clearOne()
            }
        }
    })
}


function clearAll(){
    display.value = ''
}

function clearOne(){
    display.value = display.value.replace(display.value[display.value.length-1] , '')
}