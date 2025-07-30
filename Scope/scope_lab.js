
// Global scope
var globalVar = "I am a global variable";
let globalLet = "I am also global, but scoped with let";
const globalConst = "I am also global constant";

{
// Block scope
var blockVar = "I am block-scoped var";
let blockLet = "I am block-scoped let";
const blockConst = "I am block-scoped const";
}

// Global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

// Block Scope
//console.log(blockVar);
//console.log(blockLet);

function show(){
    var functionVar = "I am block-scoped var";
    let functionLet = "I am block-scoped let";
    const functionConst = "I am block-scoped const";
}
show();

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError