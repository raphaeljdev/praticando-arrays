// Você está desenvolvendo um sistema de busca para uma biblioteca digital. Quando a pessoa usuária digita o nome de um livro, o sistema precisa verificar se ele está disponível na lista de títulos cadastrados. Escreva um programa que:

// Crie um array com nomes de livros.
// Crie uma variável com o nome de um livro procurado.
// Verifique se o livro está na lista.
// Exiba uma mensagem informando se o livro foi encontrado ou não.

const livros = ['Livro1', 'Livro2', 'Livro3', 'Livro4'];
const livroProcurado = 'Livro9';

if (livros.indexOf(livroProcurado) !== -1) {
  console.log('livro disponivel', livroProcurado);
} else {
  console.log(livroProcurado, 'nao foi encontrado');
}
