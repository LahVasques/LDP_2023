let currentStep = 1;
let totalSteps = 3;

function nextStep() {
    if (currentStep < totalSteps) {
        if (validarFormulario()) {
            let currentSection = document.getElementById("step" + currentStep);
            currentSection.style.display = "none";

            currentStep++;

            let nextSection = document.getElementById("step" + currentStep);
            nextSection.style.display = "block";
        }
    }
}

function previousStep() {
    if (currentStep > 1) {
        let currentSection = document.getElementById("step" + currentStep);
        currentSection.style.display = "none";

        currentStep--;

        let previousSection = document.getElementById("step" + currentStep);
        previousSection.style.display = "block";
    }
}

function validarFormulario() {
    let currentSection = document.getElementById("step" + currentStep);

    if (currentStep === 1) {
        // Validação para a primeira etapa
        let usuario = document.getElementById('tusuario').value;
        let email = document.getElementById('temail').value;
        let senha1 = document.getElementById('tsenha1').value;
        let senha2 = document.getElementById('tsenha2').value;

        if (usuario === "" || email === "" || senha1 === "" || senha2 === "") {
            alert("Por favor, preencha todos os campos na primeira etapa.");
            return false;
        }

        //validação do email
        let emailPadrao = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if(!email.match(emailPadrao)){
            alert("Por favor digite um e-mail válido");
            return false;
        }
        //validação da senha (mínimo 8 caracteres)
        if(senha1.length < 8 ){
            alert("A senha deve ter no minimo 8 caracteres");
            return false;
        }
        //verificando se as duas senhas são iguais
        if(senha1 !== senha2){
            alert("As senhas não coincidem. Por favor, tente novamente");
            return false;
        }



    } else if (currentStep === 2) {
        // Validação para a segunda etapa
        let nome = document.getElementById('tnome').value;
        let telefone = document.getElementById('tnumero').value;
        let sexo = document.querySelector('input[name="rdsexo"]:checked');

        if (nome === "" || telefone === "" || !sexo) {
            alert("Por favor, preencha todos os campos na segunda etapa.");
            return false;
        }

        //validação do telefone
        let numeroPadrao = /^[0-9]{9,15}$/;
        if(!telefone.match(numeroPadrao)){
            alert("Por favor digite um número de telefone válido");
            return false;
        }

         //validação do sexo
        if (!sexo){
            alert("por Favor, selecione o sexo")
            return false
        }

    } else if (currentStep === 3) {
        // Validação para a terceira etapa
        let linguagens = document.querySelectorAll('input[name="chk_language"]:checked');

        //validação de linguagens
        if (linguagens.length === 0) {
            alert("Selecione pelo menos uma linguagem na terceira etapa.");
            return false;
        }
    }

    return true;
}

function redirecionar() {
    if (validarFormulario()) {
        // Obter os valores do formulário
        let usuario = document.getElementById('tusuario').value;
        let email = document.getElementById('temail').value;
        let senha1 = document.getElementById('tsenha1').value;
        let nome = document.getElementById('tnome').value;
        let telefone = document.getElementById('tnumero').value;
        let sexo = document.querySelector('input[name="rdsexo"]:checked').value;
        let linguagens = document.querySelectorAll('input[name="chk_language"]:checked');

        // Criar uma nova linha na tabela
        let tabela = document.getElementById("tabelaUsuarios");
        let novaLinha = tabela.insertRow(-1); // -1 para adicionar no final da tabela

        // Atribuir um ID único à nova linha
        let idUnico = "usuario" + Date.now(); // Usando a timestamp como ID único
        novaLinha.id = idUnico;

        // Adicionar células à nova linha com os valores do formulário
        let celulaUsuario = novaLinha.insertCell(0);
        celulaUsuario.innerHTML = usuario;

        let celulaEmail = novaLinha.insertCell(1);
        celulaEmail.innerHTML = email;

        let celulaSenha = novaLinha.insertCell(2);
        celulaSenha.innerHTML = senha1;

        let celulaNome = novaLinha.insertCell(3);
        celulaNome.innerHTML = nome;

        let celulaTelefone = novaLinha.insertCell(4);
        celulaTelefone.innerHTML = telefone;

        let celulaSexo = novaLinha.insertCell(5);
        celulaSexo.innerHTML = sexo;

        let celulaLinguagens = novaLinha.insertCell(6);
        celulaLinguagens.innerHTML = Array.from(linguagens).map(lang => lang.value).join(", ");

        // Redirecionar
        console.log("Redirecionando...");
        window.location.href = "index.html";
    }
}




