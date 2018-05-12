let x = -1; // false, 0, null, undefined, NaN, '';

// if (x) {
//     console.log('abcd');
// }

// console.log(NaN + undefined);

// let y = undefined;
// function show() {
//     return;
// }
const person = { name: 'Teo', age: 10 };
// console.log(person.x);

try {
    console.log(person.x.y);
} catch (error) {
    console.log(error);
} finally {
    
}
console.log(1);
