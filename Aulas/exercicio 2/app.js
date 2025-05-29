//Variaveis de dados

var inputNome = document.querySelector("#nome");
var inputSenha = document.querySelector("#senha");
var inputEmail = document.querySelector("#email");
var inputIdade = document.querySelector("#idade");
var inputTelefone = document.querySelector("#telefone");
var inputSite = document.querySelector("#site");
var inputBusca = document.querySelector("#busca");
var inputData = document.querySelector("#data");
var inputHora = document.querySelector("#hora");
var inputSemana = document.querySelector("#semana");
var inputMes = document.querySelector("#mes");
var inputCor = document.querySelector("#cor");
var slctPais = document.querySelector("#pais");
var ckbHTML = document.querySelector("#html");
var ckbCSS = document.querySelector("#css");
var ckbjavascript = document.querySelector("#js");
var radioGFeminino = document.querySelector("#genero-feminino");
var radioGMasculino = document.querySelector("#genero-masculino");
var radioGOutro = document.querySelector("#genero-outro");
var radioGenero = document.getElementsByName("genero")
var enviarArquivo = document.querySelector("#arquivo");
var inputHidden = document.querySelector("#token");
var txtAreaMsg = document.querySelector("#mensagem");
var divResultado = document.querySelector("#resultado");

//Variaveis de botoes clicaveis

var btnEnviar = document.querySelector("#enviar");
var btnExibir = document.querySelector("#exibir");
var btnLimpar = document.querySelector("#limpar");

//objeto pessoa

var pessoa = {}


//botoes

btnEnviar.addEventListener("click", pegarDados);
   
btnExibir.addEventListener("click", exibirResultado);

btnLimpar.addEventListener("click", limparDados)

//Funções

function limparDados(){
    divResultado.innerHTML = "";
}

function pegarDados(){
    pessoa.nome = inputNome.value;
    pessoa.senha = inputSenha.value;
    pessoa.email = inputEmail.value;
    pessoa.idade = inputIdade.value;
    pessoa.telefone = inputTelefone.value;
    pessoa.site = inputSite.value;
    pessoa.buscar = inputBusca.value;
    pessoa.data = inputData.value;
    pessoa.hora = inputHora.value;
    pessoa.semana = inputSemana.value;
    pessoa.mes = inputMes.value;
    pessoa.cor = inputCor.value;
    pessoa.interesses = [];

    if(slctPais.value === "br"){
        pessoa.país = slctPais.value;
    }else if(slctPais.value === "pt"){
        pessoa.país = slctPais.value;
    }else if(slctPais.value === "us"){
        pessoa.país = slctPais.value;
    }

    if(ckbHTML.checked){
        pessoa.interesses.push(ckbHTML.value)
    }

    if(ckbCSS.checked){
        pessoa.interesses.push(ckbCSS.value)
    }

    if(ckbjavascript.checked){
        pessoa.interesses.push(ckbjavascript.value)
    }

    if(radioGFeminino.checked){
        pessoa.sexo = radioGFeminino.value;
    }else if(radioGMasculino.checked){
        pessoa.sexo = radioGMasculino.value;
    }else if(radioGOutro.checked){
        pessoa.sexo = radioGOutro.value;
    }
    

    pessoa.arquivo = enviarArquivo.value;
    pessoa.hidden = inputHidden.value;
    pessoa.mensagem = txtAreaMsg.value;
  
}


function exibirResultado(){
    divResultado.innerHTML =
    ` <p> Nome: ${pessoa.nome} </p>
     <p> Senha: ${pessoa.senha} </p>
      <p>Email: ${pessoa.email} </p>
     <p> Idade: ${pessoa.idade} </p>
      <p>telefone: ${pessoa.telefone} </p>
      <p>site: ${pessoa.site} </p>
     <p> busca: ${pessoa.buscar} </p>
      <p>data: ${pessoa.data} </p>
      <p>hora: ${pessoa.hora} </p>
     <p> semana: ${pessoa.semana} </p>
      <p>mes: ${pessoa.mes} </p>
      <p>cor: ${pessoa.cor} </p>
     <p> país: ${pessoa.país} </p>
      <p>interesses: ${pessoa.interesses.join(", ")} </p>
     <p> sexo: ${pessoa.sexo} </p>
      <p>arquivo: ${pessoa.arquivo} </p>
      <p>hidden: ${pessoa.hidden} </p>
      <p>mensagem: ${pessoa.mensagem} </p>

    `;
}




