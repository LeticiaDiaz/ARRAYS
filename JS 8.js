let array = []
let suma = 0 

for (let i = 0; i < 20; i ++) {
    array[i] = Math.floor(Math.random() * (36 - 18)) + 18
    suma = suma + array[i]
}
console.log (suma / 20)

 

