// You're writing code to control your town's traffic lights. You need a function to handle each change from green,
// to yellow, to red, and then to green again.
//
// Complete the function that takes a string as an argument representing the current state of the light and
// returns a string representing the state the light should change to.
//
// For example, when the input is green, output should be yellow.

// ------------------------------

// Вы пишете код для управления светофорами в своем городе. Вам нужна функция, которая будет обрабатывать смену сигналов:
// с зеленого — на желтый, с желтого — на красный, а с красного — снова на зеленый.
//
// Реализуйте функцию, которая принимает в качестве аргумента строку, обозначающую текущий сигнал светофора,
// и возвращает строку, обозначающую следующий сигнал.
//
// Например, если на входе «зеленый», на выходе должен быть «желтый».

function updateLight(current) {
    return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'
}

function updateLight1(current) {
    const lights = {
        green: 'yellow',
        yellow: 'red',
        red: 'green'
    }
    return lights[current]
}



console.log(updateLight("green"))
console.log(updateLight("yellow"))
console.log(updateLight("red"))

console.log(updateLight1("green"))
console.log(updateLight1("yellow"))
console.log(updateLight1("red"))