// const a = console.log;
// console.log(a);
// a(1);

// function getLog() {
//     return console.log;
// }
// getLog()(1);

function doSth(fn) {
    fn(1);
}

doSth(console.log);
