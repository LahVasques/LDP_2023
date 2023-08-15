let figura = document.querySelector('radio');
let exibir = document.getElementById("exibir");
let fig = "";
exibir.innerHTML = "Figuras: " + fig;
const elementosDiv = document.getElementById("elementosDiv");

function checar() {
    let botoes = document.getElementsByName("rdbFigura");
    for (let i in botoes) {
        if (botoes[i].checked) {
        exibir.innerHTML = "Figura = " + botoes[i].value;
        }
    }
    return botoes[i].value;
}

function removerElementoAtual() {
    elementosDiv.innerHTML = ""; // Limpa o conteúdo da div
}

// Mostra imagem do Quadrado
function adcElemento_q() {
    removerElementoAtual();

    let imagem = document.createElement("img");
    let formula = document.createElement("label");
    let texto = document.createElement("label");
    let lado = document.createElement("input");
    let quebra = document.createElement("br");
    let botao = document.createElement("button");
    // atribui os valores aos nós
    imagem.src = "img/quadrado.jpg";
    formula.innerHTML = "<br>área = lado * lado";
    texto.innerHTML = "Lado : ";
    lado.type = "number";
    lado.id = "vl";
    botao.innerHTML = "Calcular";
    botao.addEventListener("click", area_quadrado);
    // adiciona os nós ao elementosDiv
    elementosDiv.appendChild(imagem);
    elementosDiv.appendChild(formula);
    elementosDiv.appendChild(quebra); 
    elementosDiv.appendChild(texto);
    elementosDiv.appendChild(lado);
    elementosDiv.appendChild(botao);
    
}

// Calcula a área do quadrado
function area_quadrado() {
    let vl_lado = document.getElementById("vl").value;
    const area = document.createElement("h3");
    elementosDiv.appendChild(area);
    area.innerHTML = "Área = " + vl_lado * vl_lado;
}

// Mostra imagem do Circulo
function adcElemento_c() {
    removerElementoAtual();

    let imagem = document.createElement("img");
    let formula = document.createElement("label");
    let texto = document.createElement("label");
    let raio = document.createElement("input");
    let quebra = document.createElement("br");
    let botao = document.createElement("button");
    // atribui os valores aos nós
    imagem.src = "img/circulo.png";
    formula.innerHTML = "<br>área = &#960 * raio²";
    texto.innerHTML = "raio : ";
    raio.type = "number";
    raio.id = "vl";
    botao.innerHTML = "Calcular";
    botao.addEventListener("click", area_circulo);
    // adiciona os nós ao elementosDiv
    elementosDiv.appendChild(imagem);
    elementosDiv.appendChild(formula);
    elementosDiv.appendChild(quebra);
    elementosDiv.appendChild(texto);
    elementosDiv.appendChild(raio);
    elementosDiv.appendChild(botao);
}

// Calcula a área do círculo
function area_circulo() {
    let vl_raio = document.getElementById("vl").value;
    const area = document.createElement("h3");
    elementosDiv.appendChild(area);
    area.innerHTML = "Área = " + 3.14 * (vl_raio * vl_raio);
}

// Mostra imagem do Triângulo
function adcElemento_t() {
    removerElementoAtual();

    let imagem = document.createElement("img");
    let formula = document.createElement("label");
    let base = document.createElement("input");
    let texto = document.createElement("label");
    let altura = document.createElement("input");
    let texto2 = document.createElement("label");
    let quebra = document.createElement("br");
    let botao = document.createElement("button");
    // atribui os valores aos nós
    imagem.src = "img/triangulo.png";
    formula.innerHTML = "<br> área = (base * altura) / 2";
    texto.innerHTML = "<br>  Base : ";
    base.type = "number";
    base.id = "vl";
    texto2.innerHTML = "<br>  Altura : ";
    altura.type = "number";
    altura.id = "vl2";
    botao.innerHTML = "Calcular";
    botao.addEventListener("click", area_triangulo);
    // adiciona os nós ao elementosDiv
    elementosDiv.appendChild(imagem);
    elementosDiv.appendChild(formula);
    elementosDiv.appendChild(quebra);
    elementosDiv.appendChild(texto);
    elementosDiv.appendChild(base);
    elementosDiv.appendChild(texto2);
    elementosDiv.appendChild(altura);
    elementosDiv.appendChild(quebra);
    elementosDiv.appendChild(botao);
}

// Calcula a área do triângulo
function area_triangulo() {
    let vl_base = document.getElementById("vl").value;
    let vl_altura = document.getElementById("vl2").value;
    const area = document.createElement("h3");
    elementosDiv.appendChild(area);
    area.innerHTML = "Área = " + (vl_base * vl_altura) / 2;
}