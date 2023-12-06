console.log(localStorage)

let usuarioDataString = localStorage.getItem('usuarioData');

if (usuarioDataString) {
    let usuarioData = JSON.parse(usuarioDataString);

    let tabela = document.getElementById("tabelaUsuarios");
    let novaLinha = tabela.insertRow(-1);

    let idUnico = "usuario" + Date.now(); // Usando a timestamp como ID único
    novaLinha.id = idUnico;

    let celulaUsuario = novaLinha.insertCell(0);
    celulaUsuario.innerHTML = usuarioData.usuario;

    let celulaEmail = novaLinha.insertCell(1);
    celulaEmail.innerHTML = usuarioData.email;

    let celulaSenha = novaLinha.insertCell(2);
    celulaSenha.innerHTML = senha1; // Armazenar a senha (não seguro, apenas para fins de trabalho)

    let celulaNome = novaLinha.insertCell(3);
    celulaNome.innerHTML = nome;

    let celulaTelefone = novaLinha.insertCell(4);
    celulaTelefone.innerHTML = telefone;

    let celulaSexo = novaLinha.insertCell(5);
    celulaSexo.innerHTML = sexo;

    let celulaLinguagens = novaLinha.insertCell(6);
    celulaLinguagens.innerHTML = Array.from(linguagens).map(lang => lang.value).join(", ");


} else {
    console.log("Os dados do usuário não foram encontrados.");
}
