const mercado  = () => {
     let nome = document.getElementById('produto').value
     let quantidade = parseInt(document.getElementById('quantidade').value)
     let produto = ''
     console.log(quantidade)
     for(let i = 1; i <=  quantidade ; i ++){

       if( i == 1) {
           produto = nome  + ','
       }else if( i < quantidade  && i > 0 && i != 0) {
           produto = produto + nome + ','
       }else {
           produto =  produto + nome
       }
       
        
         
     }
  console.log(nome)
     document.getElementById('resultado').innerHTML = produto
}