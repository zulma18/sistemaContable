
/**
 * Capturar los textos
 */

const depositoTexto =document.getElementById('depositoActual'),
      retiroTexto= document.getElementById('retiroActual'),
      balanceTexto=document.getElementById('balanceActual'),

/**
 * Capturar los input
 */

    inputDeposito=document.getElementById('depositoInput'),
    inputRetiro=document.getElementById('retiroInput'),


    /**
     * Capturar botones
     */
    btnDeposito=document.getElementById('calcularDeposito'),
    btnRetiro=document.getElementById('calcularRetiro')


    /**
     * Agregar evento deposito
     */

    btnDeposito.addEventListener('click',(event)=>{
        const valorDeposito= inputDeposito.value
        const totalDeposito=Number(depositoTexto.innerText)+Number(valorDeposito)
        const totalBalance=Number(balanceTexto.innerText)+Number(valorDeposito)
        depositoTexto.innerHTML=totalDeposito
        balanceTexto.innerHTML=totalBalance

        inputDeposito.value=''  
    })

    /***
     * Evento del retiro
     */
    btnRetiro.addEventListener('click',(event)=>{
        const valorRetiro= inputRetiro.value
        if(valorRetiro==0){

            alert("No tengo nada que retirar")
            return
        }

        if(Number(valorRetiro)>Number(balanceTexto.innerText)){

            alert("No hay dinero suficiente")
            alert("Terricola")
            return
        }

        alert("Retiro exitoso")
         
    })