let vetor = [3,5,4,2,1,6,8,7,11,9]

let chave = 0

let i = 0 
let b = 0
let contar = vetor.length - 1

for( i = 1; i <= contar; i++){
    chave = vetor[i]
    b = i - 1;
  
    while(b >= 0 && vetor[b] < chave){
        console.log(b)
        vetor[b + 1] = vetor[b]
      b = b - 1
    }
    vetor[b + 1] = chave
}

console.log(vetor)


