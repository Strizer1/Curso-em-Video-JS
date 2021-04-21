let num = [5, 8, 2, 9, 3]
num.push(1) // Adiciona um elemento ao vetor
num.sort() // Coloca o vetor em ordem
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4) // Verifica a posição em que o valor se encontra
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}