const texto = "Aprenda programar do zero na Cubos Academy";

let novoTexto = "";
let textoAntigo = texto;
while (textoAntigo !== novoTexto) {
    novoTexto = textoAntigo;
    textoAntigo = textoAntigo.replace(" ", "-");
}


console.log(novoTexto);