let array = []

const adicionar = () =>{
 
     const valor = (Number(document.getElementById('numero').value))
     document.getElementById('numero').value = ''
    if(!isNaN(valor)){

        array.push(valor)
    }

    document.getElementById('resultado').innerHTML = array
             
    estaOrdenado()

  


}

const estaOrdenado = () =>{
  let vF = true
    if ( array.length > 1){
        for(let i= 1; i  <= array.length; i ++){
        
        
            if( array[i] < array[i - 1]  ){
               vF = false
               i = array.length
            }
        }
  }

  if(vF) {
      document.getElementById('crescente').innerHTML =  'esta em ordem'
  }else{
    document.getElementById('crescente').innerHTML =  ' não esta em ordem'
  }
}



const clean = () =>{

    array = []

     document.getElementById('resultado').innerHTML = array;
     document.getElementById('crescente').innerHTML = ''
}

const remover = () => {
    let valor = Number(document.getElementById('numero').value)

 array =  array.filter(elemento => elemento != valor)

 document.getElementById('resultado').innerHTML = array

 estaOrdenado()
}

const posicao = () =>{
     let valor = Number(document.getElementById('numero').value)
      let posicao = 0
       


      let encontrado = false
       for(let i= 0; i <= array.length; i ++){
               
           if(array[i] === valor){
          
             posicao = i
             i = array.length
             encontrado = true
           }
       }

       //pode ser usado o indexOf ao inves de for
   
      encontrado ?  window.alert(`O número ${valor} esta na posição ${posicao}`) :  window.alert('número não encontrado')
}


const ordenar = () =>{
     for(let i= 0; i < array.length; i ++){
       
       for(let i2 = 0; i2 < array.length; i2 ++){
         if(array[i] < array[i2] ){
             let x = array[i]
             array[i] = array[i2]
             array[i2] = x
          
         }
     }
         }


         document.getElementById('resultado').innerHTML = array


    

    
}