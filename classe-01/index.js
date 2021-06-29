const comentario = "Esse PANDEMIA é muito perigoso!";

if (comentario.includes("COVID") || comentario.includes("covid") || comentario.includes("Covid")) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else if (comentario.includes("PANDEMIA") || comentario.includes("pandemia") || comentario.includes("Pandemia")) {
    console.log("Comentário bloqueado por conter palavras proibidas");
} else {

    console.log("Comentário autorizado");
}

