const display = document.querySelector('input')

let buttons = document.querySelectorAll('button')


for(let button of buttons){
    button.addEventListener('click',()=>{
        if(button.innerHTML != 'AC' && button.innerHTML != 'DE'){
        display.value += button.innerHTML;
    }
})
}
