vetor =['peixe', 'camarão', 'bagre']


const carregar = () =>{
  
    algo2 =  vetor.reduce((total, elements) => { total + `<li>${elements}<li>`}, '' )
    document.getElementById('listinha').innerHTML = algo2
    console.log(algo2)
}