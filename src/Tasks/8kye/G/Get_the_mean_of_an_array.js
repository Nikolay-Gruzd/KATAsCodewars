// It's the academic year's end, fateful moment of your school report. The averages must be calculated.
// All the students come to you and entreat you to calculate their average for them.
// Easy ! You just need to write a script.
//
// Return the average of the given array rounded down to its nearest integer.
//
// The array will never be empty.

//--------------------------------------------------

// Конец учебного года — ответственный момент, время подводить итоги успеваемости. Нужно рассчитать средние баллы.
// Ученики обращаются к вам с просьбой помочь им в этом.
// Проще простого! Достаточно написать небольшой скрипт.
//
// Верните среднее значение элементов массива, округлённое в меньшую сторону до целого числа.
//
// Массив никогда не бывает пустым.

function getAverage(marks){
    return Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length)
}

console.log(getAverage([2,2,2,2]))
console.log(getAverage([1,2,3,4,5]))
console.log(getAverage([1,1,1,1,1,1,1,2]))