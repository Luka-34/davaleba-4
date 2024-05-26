// დაწერე ფუნქცია, რომელიც მიიღებს სამ
// პარამეტრს (string, valueToReplace,
// valueToReplaceWith), ჩაანაცვლებს
// "valueToReplace"-ს "valueToReplaceWith"
// მნიშვნელობით და დააბრუნებს ახალ stringს
// არ გამოიყენო string.replace() ფუნქცია

function newStr (string,valueToReplace,valueToReplaceWith) {
    return string.split(valueToReplace).join(valueToReplaceWith)
}

const originalString = "Hi Ben";
const valueToReplace = "Ben";
const valueToReplaceWith = "Ann";
const newString = newStr(originalString, valueToReplace, valueToReplaceWith);

console.log(newString);


// დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს string ტიპის მნიშვნელობას
// (წინადადებას), მასში ყოველ სიტყვას
// გადაწერს დიდი ასოთი და დააბრუნებს
// ახალ წინადადებას

let strings ;

function toUpperCase(strings) {
    return strings.toUpperCase();
}

console.log(toUpperCase("hey how are you?"));


// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს მომხმარებლების მასივს და
// დააბრუნებს დალაგებულ მასივს
// მომხმარებლების ასაკის ზრდადობის
// მიხედვით
// ● მაგალითად, ჩავთვალოთ, რომ გვაქვს
// [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age:
// 20}]. ფუნქციამ უნდა დააბრუნოს [{name:
// ‘Saba’, age: 20}, {name: ‘Lasha’, age: 30}]
// ● შეგიძლია გამოიყენო sort() ფუნქცია


const users = [
    {name: 'Levani', age: 20},
    {name: 'gio', age: 5},
    {name: 'Lasha', age: 30},
    {name: 'Saba', age: 50},
    {name: 'Soso', age: 9},
    {name: 'Toma', age: 10},
]

function sortUsers(users) {
    return users.sort((a, b) => a.age - b.age)
}

console.log(sortUsers(users));