const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = 'Guerra e Paz';


if (livros.includes(nomeDoLivro)) {
    console.log(livros.indexOf(nomeDoLivro) + 1);
} else {
    console.log("Livro não localizado");
}