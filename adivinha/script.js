function iniciarJogo() {
    const username = document.getElementById('username').value;
    if (username.trim() === "") {
        alert("Por favor, insira um nome de usuário válido.");
    } else {
        // Ocultar a tela de início e exibir a tela do jogo
        document.getElementById('startScreen').classList.add('hidden');
        document.getElementById('gameScreen').classList.remove('hidden');
        
        alert("Bem-vindo, " + username + "! O jogo está prestes a começar.");
    }
}


const jogoAdivinha = {
    semente: 50,
    tentativa: 0,
    numeroSorteado: function geraValorAleatorio() {
    return Math.round(Math.random() * this.semente);
    },
};

const btnVerifica = document.getElementById("btnVerifica");
const status = document.getElementById("status");
const tentativa = document.getElementById("tentativa");
const chute = document.getElementById("chute");
const username = document.getElementById("username"); 

let numeroSorteado = jogoAdivinha.numeroSorteado();
console.log(numeroSorteado);


function atualizarTentativa(tentativa, valor) {
    if (valor > 1) {
    tentativa.innerHTML =
        'Tentativas : <span style="color:#6b6b6b;">' + valor + "</span>";
    } else {
    tentativa.innerHTML =
        'Tentativa : <span style="color:#6b6b6b;">' + valor + "</span>";
    };
    

}


function reiniciar() {
    btnVerifica.innerText = "Verificar";
    tentativa.innerHTML = "Tentativa :  0";
    status.innerHTML = "Adivinhe o número sorteado"
    chute.disabled = false;
    chute.value = "";
    jogoAdivinha.tentativa = 0;
    numeroSorteado = jogoAdivinha.numeroSorteado();
    btnVerifica.removeEventListener("click", reiniciar);
}

const formAdivinha = document.getElementById("form");

formAdivinha.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!!chute.value == false) {
    status.innerHTML = '<span style="color:#FF3D00">Digite algum valor</span>';
    return;
    }

    atualizarTentativa(tentativa, ++jogoAdivinha.tentativa);

    if (numeroSorteado == chute.value) {
    status.innerHTML =
        '<span style="color:#00C853">Parabéns, ' + username.value + ', você acertou!!</span>';
    chute.disabled = true;
    btnVerifica.innerText = "Tentar novamente?";
    btnVerifica.addEventListener("click", reiniciar);
    } else if (numeroSorteado > chute.value) {
    status.innerText = "O número sorteado é maior";
    } else if (numeroSorteado < chute.value) {
    status.innerText = "O número sorteado é menor";
    };
    
    if (jogoAdivinha.tentativa == 5  && chute.value != numeroSorteado) { 
    chute.disabled = true;
    btnVerifica.innerText = "Tentar novamente?";
    btnVerifica.addEventListener("click", reiniciar);
    status.innerHTML = '<span style="color:red">Você perdeu! Acabaram suas tentativas</span>';
    console.log(numeroSorteado);
    };
});
