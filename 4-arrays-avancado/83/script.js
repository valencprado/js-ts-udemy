// concatenando arrays

// usando concat()
//  const a1 = [1, 2, 3];
//  const a2 = [4, 5, 6];
// const a3 = a1.concat(a2);
// console.log(a3);



// usando spread operator
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2, ...[12, 12, 12]];

console.log(a3);