// You take your son to the forest to see the monkeys. You know that there are a certain number there (n),
// but your son is too young to just appreciate the full number, he has to start counting them from 1.
//
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all
// numbers up to and including that number, but excluding zero.
//
//     For example(Input --> Output):
//
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1 --> [1]

// ------------------------------

// Вы приводите сына в лес посмотреть на обезьян. Вы знаете, что их там определённое количество (n),
// но ваш сын ещё слишком мал, чтобы сразу осознать их общее число — ему нужно пересчитать их, начиная с 1.
//
// Как заботливый родитель, вы садитесь рядом и считаете вместе с ним. Получив на вход число (n),
// создайте массив, содержащий все числа от 1 до n (включительно).
//
//     Пример (Входные данные --> Результат):
//
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1 --> [1]

function monkeyCount(n) {
    // return Array.from({length:n}, (_,i) => i + 1)
    let arr = []
    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }
    return arr
}

console.log(monkeyCount(5))
console.log(monkeyCount(3))
console.log(monkeyCount(9))
console.log(monkeyCount(10))
console.log(monkeyCount(20))