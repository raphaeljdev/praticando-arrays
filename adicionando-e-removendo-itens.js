// Você está desenvolvendo um sistema de tarefas do dia a dia. O sistema deve permitir que a pessoa usuária adicione uma nova tarefa ao final da lista e, em seguida, remova a última tarefa que foi adicionada. Escreva um programa que:

// Crie um array com três tarefas iniciais.
// Adicione uma nova tarefa no final da lista.
// Remova a última tarefa da lista.
// Exiba a lista após cada operação.

const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras'];

// tarefas = 'Abastecer o carro';
tarefas.push('Abastecer o carro');
console.log(tarefas);
tarefas.splice(tarefas.length - 1);
// ou utilizar tarefas.pop()
console.log(tarefas);
tarefas.pop();
console.log(tarefas);
