var inputId = document.querySelector("#inputId")
var inputDescricao = document.querySelector("#inputdescricao")
var inputValores = document.querySelector("#valores")
var ckbBebida = document.querySelector("#bebida")
var ckbComida = document.querySelector("#comida")
var ckbLimpeza = document.querySelector("#limpeza")
var btnGravar = document.querySelector("#gravar")
var btnExibir = document.querySelector("#exibir")
var divResultado = document.querySelector("#resultado")

var produto = {}

btnGravar.addEventListener("click",  dados)

btnExibir.addEventListener("click", exibirDados)

function exibirDados(){
    divResultado.innerHTML = `
    <p>Id: ${produto.id}</p>
    <p>descricao: ${produto.descricao}</p>
    <p>Tabela_Valores: ${produto.Tabela_Valores}</p>
    <p>categorias: ${produto.categorias.join(", ")}</p>
    `
}

function dados(){
    produto.id = inputId.value;
    produto.descricao = inputDescricao.value;

    
    if(inputValores.value === "100.00"){
        produto.Tabela_Valores = inputValores.value
    }else if(inputValores.value === "150.00"){
        produto.Tabela_Valores = inputValores.value
    }else if(inputValores.value === "130.00"){
        produto.Tabela_Valores = inputValores.value
    }

    produto.categorias = []

    if(ckbBebida.checked){
        produto.categorias.push(ckbBebida.value)
    }

    if(ckbComida.checked){
        produto.categorias.push(ckbComida.value)
    }

    if(ckbLimpeza.checked){
        produto.categorias.push(ckbLimpeza.value)
    }
}