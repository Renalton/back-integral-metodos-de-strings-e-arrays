const cpf = "123456278900";
const cnpj = "12345678000199";
let cadastro = "";


/*
if (cpf.length === 11) {

    cadastro = cpf.substr(0, 3) + "." + cpf.substr(3, 3) + "." + cpf.substr(6, 3) + "-" + cpf.substr(9, 2);


} else {
    console.log("CPF inválido");
}

*/
if (cnpj.length === 14) {
    cadastro = cnpj.substr(0, 2) + "." + cnpj.substr(2, 3) + "." + cnpj.substr(5, 3) + "/" + cnpj.substr(8, 4) + "-" + cnpj.substr(12, 2);
} else {
    console.log("CNPJ inválido");
}

console.log(cadastro);

