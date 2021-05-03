const retornar = () =>{
    let nome = document.getElementById('nome').value
   let valor = 2 *  Math.floor( document.getElementById('valor').value)

   document.getElementById('nomeP').innerHTML= `Promoção de ${nome}`
   document.getElementById('valorP').innerHTML = `Leve dois por ${valor}`
}