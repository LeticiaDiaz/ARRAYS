let array = []

for ( let i = 0; i < 3; i++) {
    array[i] = parseInt (window.prompt ("Escribe un valor"))
}

if (array[0] < array[1] && array[0] < array[2]) {
    console.log ( `${array[0]} es el valor más pequeño`)
} else if (array[1] < array[0] && array[1] < array[2]) {
    console.log ( `${array[1]} es el valor más pequeño`)
} else {
    console.log ( `${array[2]} es el valor más pequeño`)
}