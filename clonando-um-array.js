// Você está desenvolvendo um sistema de pedidos online. Em certo momento, o sistema precisa criar uma cópia da lista de pedidos para simular alterações, sem modificar o array original. Escreva um programa que:

// Crie um array com alguns pedidos.
// Faça uma cópia do array.
// Adicione um novo item apenas na cópia.
// Exiba os dois arrays para mostrar que o original não foi alterado.

const pedidos = ['Camiseta', 'calca', 'tenis'];
const pedidosCopia = pedidos.slice();

pedidosCopia.push('Bone');

console.log('Array original:', pedidos);
console.log('Array clonado:', pedidosCopia);
