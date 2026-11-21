// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters.
// The first parameter, employed, is true whenever you are employed and the second parameter,
// vacation is true whenever you are on vacation.
//
//     The function should return true if you are employed and not on vacation (because these are the circumstances
//     under which you need to set an alarm). It should return false otherwise. Examples:
//
// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

// --------------------------------------------------

// Напишите функцию с названием setAlarm (или set_alarm, set-alarm, setAlarm — в зависимости от языка программирования),
// которая принимает два параметра.
// Первый параметр, employed, принимает значение true, если вы трудоустроены; второй параметр, vacation,
// принимает значение true, если вы находитесь в отпуске.
//
// Функция должна возвращать true, если вы трудоустроены и не находитесь в отпуске
// (поскольку именно в таких обстоятельствах нужно ставить будильник).
// В противном случае функция должна возвращать false. Примеры:
//
// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

function setAlarm(employed, vacation){
    return employed && !vacation
}

console.log(setAlarm(true, true))
console.log(setAlarm(true, false))
console.log(setAlarm(false, true))
console.log(setAlarm(false, false))
