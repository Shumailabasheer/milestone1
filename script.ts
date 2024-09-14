const toggleButton = document.getElementById('toggle')as HTMLButtonElement;
const get = document.getElementById('get') as HTMLElement;

toggleButton.addEventListener("click",()=>{
    if(get.style.display=== 'none'){
        get.style.display='block'
    }
    else{
        get.style.display='none'
    }
})

