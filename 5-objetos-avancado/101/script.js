const pessoas = [
{id: 3, nome: 'Alguém'},
{id: 2, nome: 'Outro'},
{id: 1, nome: 'Também'},
];

// const novasPessoas = {};
// for(const pessoa of pessoas) {
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoa};
// }
// console.log(novasPessoas);

const novasPessoas = new Map();
for(const pessoa of pessoas) {
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}
// for(const pessoas of novasPessoas.values()) {
//     console.log(pessoas);
// }
novasPessoas.delete(2);
console.log(novasPessoas);