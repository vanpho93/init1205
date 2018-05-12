function add(a, b) {
    return a + b;
}

// console.log(add(1, 2));

// console.log(Math.round(1.5));
// console.log(Math.ceil(1.4));
// console.log(Math.floor(1.6));
// console.log(Math.random());

function getRandom(n) {
    return Math.floor(Math.random() * (n + 1))
}

console.log(getRandom(2));
