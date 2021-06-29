let identificador = "123";
let nome = "josé silva costa";
let email = "      jose@email.com  ";
let tags = ['financeiro', 'administrativo', 'geral'];

//O padrão do identificador são seis dígitos e caso o número não possua essa quantidade, complete com zero a esquerda;
identificador = identificador.padStart(6, "0");

//O nome e sobrenome precisam sempre começar com letra maiúscula;
for (let novoNome of nome.split(" ")) {
    nome = nome.replace(novoNome, novoNome.replace(novoNome.slice(0, 1), novoNome.slice(0, 1).toUpperCase()));

}
//O e-mail não pode ter espaços em branco;
console.log(email.trim());
//O array de tags precisa ser uma única string, separada por vírgulas.
console.log(tags.join(", "));
