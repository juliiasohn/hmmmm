document.getElementById("Confirmar").addEventListener("click", function () {
    const filme= document.getElementById("filme").value;
    const mensagens= {
        "comédia": "Esposa de Mentirinha",
        "romance": "Como Perder um Homem em 10 dias, Diário de uma Paixão",
        "ação": "Velozes e Furiosos",
        "terror": "Terriffier",
        "documentário": "O Dilema das Redes",
        "indicados": "Ainda estou aqui.",
        "suspense": "Hush",
        "drama": "Central do Brasil",
        "musical": "Wicked",
        "ficção científica": "Questão de Tempo",
    };
    const mensagem = mensagens[filme] || "Não foi possível identificar o problema para o sintoma selecionado.";

    document.getElementById("mensagemConfirmar").innerText = mensagem;
});