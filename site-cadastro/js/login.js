let tentativas = 0

function login(){
    if(tentativas === 3){
        //adicionar uma mensagem aqui
    }else{
        tentativas++
        
    }
}

function fazerLogin() {
    let emailLogin = document.getElementById('emailLogin').value;
    let senhaLogin = document.getElementById('senhaLogin').value;

    let tabela = document.getElementById("tabelaUsuarios");

    for (let i = 1; i < tabela.rows.length; i++) {
        let row = tabela.rows[i];

        let emailArmazenado = row.cells[1].innerHTML;
        let senhaArmazenada = row.cells[2].innerHTML;

        if (emailLogin === emailArmazenado && senhaLogin === senhaArmazenada) {
            alert("Login bem-sucedido!");
            return;
        }
    }
    alert("Credenciais inválidas. Por favor, tente novamente.");
}
