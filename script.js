// Aguarda o navegador carregar toda a estrutura HTML
document.addEventListener("DOMContentLoaded", function () {
    
    const formulario = document.getElementById("meuFormulario");
    const caixaSucesso = document.getElementById("alertaSucesso");

    // Escuta o momento em que o usuário clica em enviar
    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault(); // Evita que a página recarregue do nada

        // Pegando os valores reais digitados pelo usuário
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Elementos de texto para exibir os erros abaixo dos campos
        const erroNome = document.getElementById("erroNome");
        const erroEmail = document.getElementById("erroEmail");
        const erroMensagem = document.getElementById("erroMensagem");

        // Variável que diz se o formulário está limpo ou não
        let valido = true;

        // Limpando mensagens antigas antes de validar de novo
        erroNome.textContent = "";
        erroEmail.textContent = ""; 
        erroMensagem.textContent = "";

        // Verificando o campo Nome
        if (nome === "") {
            erroNome.textContent = "Por favor, digite seu nome.";
            valido = false;
        } else if (nome.length < 3) {
            erroNome.textContent = "O nome precisa ter pelo menos 3 letras.";
            valido = false;
        }

        // Verificando o campo Email com regra de validação simples
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === "") {
            erroEmail.textContent = "Precisamos do seu e-mail para responder.";
            valido = false;
        } else if (!regexEmail.test(email)) {
            erroEmail.textContent = "Insira um formato de e-mail válido (ex@exemplo.com).";
            valido = false;
        }

        // Verificando o campo Mensagem
        if (mensagem === "") {
            erroMensagem.textContent = "Escreva uma breve mensagem antes de enviar.";
            valido = false;
        }

        // Se passar por todos os testes acima
        if (valido) {
            // Esconde o formulário para dar um feedback visual limpo
            formulario.classList.add("escondido");
            
            // Mostra o quadro verde de sucesso
            caixaSucesso.classList.remove("escondido");

            // Simulação física dos dados salvos, printando na ferramenta de desenvolvedor
            console.log(" BANCO DE DADOS (simulação)");
            console.log("Dados recebidos da aplicação:");
            console.log("Nome Cadastrado: " + nome);
            console.log("E-mail Cadastrado: " + email);
            console.log("Mensagem Enviada: " + mensagem);
            console.log("Log registrado em: " + new Date().toISOString());
        }
    });
});