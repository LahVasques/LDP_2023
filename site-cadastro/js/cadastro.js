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
        let tusuario = document.getElementById('tusuario').value;
        let temail = document.getElementById('temail').value;
        let tsenha1 = document.getElementById('tsenha1').value;
        let tnome = document.getElementById('tnome').value;
        let ttelefone = document.getElementById('tnumero').value;
        let inpsexo = document.querySelector('input[name="rdsexo"]:checked').value;
        let inplinguagens = document.querySelectorAll('input[name="chk_language"]:checked');

        let usuarioData = {
            usuario: tusuario,
            email: temail,
            senha: tsenha1,
            nome: tnome,
            telefone: ttelefone,
            sexo: inpsexo,
            linguagens: Array.from(inplinguagens).map(lang => lang.value).join(", ")
        };

        localStorage.setItem('usuarioData', JSON.stringify(usuarioData));


        // Redirecionar
        console.log("Redirecionando...");
        window.location.href = "index.html";
    }
}




