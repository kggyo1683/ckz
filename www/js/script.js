const sendButton = document.querySelector('.send');

function checking(){
    const username = document.querySelector('.form input');
    const surname = document.querySelector('.form.form2 input');
    const  cpu = document.querySelectorAll('input[name="cpu"]');
    const  gpu = document.querySelectorAll('input[name="kartagraficzna"]');
    let communicate = true;

    if (username.value == "" || username.value.length < 2){
        alert('Nie wpisałeś imienia.')
    }
    if(surname.value == "" || surname.value.length < 2){
        alert('Nie wpisałeś nazwiska.')
    }
    
    for(let i=0;i<cpu.length; i++){
        if(cpu[i].checked == true){
            communicate = false
        }
    }
    
    if(communicate){
        alert("Wymagane jest zaznaczenie jednej marki procesora.");
    }
    
    let communicate2 = true;
    
    for(let i=0;i<gpu.length; i++){
        if(gpu[i].checked == true){
            communicate2 = false
        }
    }
    
    
    if(communicate2){
        alert("Wymagane jest zaznaczenie jednej marki karty graficznej.");
    }
}

sendButton.addEventListener('click', checking )

