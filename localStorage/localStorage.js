


// let palavrasStr = localStorage.palavras;
// let palavras = palavrasStr ? JSON.parse(palavrasStr) : [];

let palavrasStr = localStorage.palavras;
  let palavras = palavrasStr ? JSON.parse(palavrasStr) : [];


const geraLista = () => {
  
  let listaStr = palavras.reduce(
    (total, elem) =>  total + `<li>${elem}</li>`, '' 
  );
  document.getElementById('lista').innerHTML = listaStr;
}
const inserirPalavra = () => {  

  let palavra = document.getElementById('palavra').value;
  if (palavra) {
    palavras.push(palavra);
    localStorage.palavras = JSON.stringify(palavras);
    document.getElementById('palavra').value = '';
    geraLista();
  }

}
const limpar = () => {
  localStorage.clear()

  palavras = []
 }

 geraLista()

