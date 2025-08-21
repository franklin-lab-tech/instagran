


// [x] "Tempo"

// setInterval - Ele chama uma função tempos em tempos
// ex: 5 em 5 segundos 


let imagem = document.querySelector(".troca-imagem")

function trocaImagem(){

    if(imagem.style.opacity == 0){
        imagem.style.opacity = 1 
    } 
    
    else {imagem.style.opacity = 0 

    }

    
    
     

    console.log("Trocar imagem")



// opacidade / 1 elemento visível / 0 elemento invisível 

}
setInterval(trocaImagem, 3000)




// milissegundos 1000 = 1 segundo 

// document = HTML 

// querySelector = Selecionar alguma coisa 



// [] If & Elfe 

//If = SE EM ENG -> FAÇA ISSO 

// Elfe = SE NÃO em ENG -> Faça isso 



// =  -> Atribuir ou colocar um valor dentro 
 
// == -> Comparando A com B 