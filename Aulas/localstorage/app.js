// const pessoas = []

// const pessoas = [
//   { id: 1, nome: "Anna", idade: 26, sexo: "M", salario: 2000},
//   { id: 2, nome: "rosé", idade: 30, sexo: "F", salario: 2300},
//   { id: 3, nome: "lisa", idade: 26, sexo: "F", salario: 2200},
//   { id: 4, nome: "jennie", idade: 35, sexo: "M", salario: 3000},
//   { id: 5, nome: "jisoo", idade: 29, sexo: "F", salario: 4500},
//   { id: 6, nome: "Laura", idade: 26, sexo: "M", salario: 3400}
// ]

//   var jsonObj = JSON.stringify(pessoas) //pegando o array de objetos de pessoas e transformando em string
//   localStorage.setItem("pessoas", jsonObj) // armazenando em local storage

//   console.log(jsonObj) //o json virou string

//   var pessoasObj = JSON.parse(localStorage.getItem("pessoas")) //tranformando a string armazenada no localstorage em array de objetos novamente

//   console.log(pessoasObj) // o json virou array novamente

  // pessoasObj.push( { id: 6, nome: "Laura", idade: 26, sexo: "M", salario: 3400})

  // var html = ''

  // pessoasObj.forEach(function (pessoa){
  //   html += "<tr>"
  //   html += `<td>${pessoa.id}</td>`
  //   html += `<td>${pessoa.nome}</td>`
  //   html += `<td>${pessoa.idade}</td>`
  //   html += `<td>${pessoa.sexo}</td>`
  //   html += `<td>${pessoa.salario}</td>`
  //   html += `<tr>`
  // })

  // document.getElementById('linhas').innerHTML = html

// var jsonObj = JSON.stringify(pessoas)

// console.log(jsonObj)

// var objetos = JSON.parse(jsonObj)

// console.log(objetos)

// localStorage.setItem("Matéria", "programação para sítios")

// var materia = localStorage.getItem("Matéria")

// console.log(materia)

// localStorage.removeItem("Matéria")

// localStorage.setItem("fatec", "segunda-feira")

// localStorage.setItem("Matéria", "programação para sítios")

// localStorage.clear();

// DONE TODO [Geral]: adicionar botão para "resetar" localStorage
// DONE TODO [Geral]: adicionar modo dark na página
// DONE TODO [Geral]: adicionar painel com mensagens de erro/sucesso

// DONE TODO [Cadastro de placas]: adicionar campo Id "somente" exibição
// DONE TODO [Cadastro de placas]: adicionar validação com todos os campos obrigatórios
// DONE TODO [Cadastro de placas]: adicionar campo para status (ativo/inativo)

// DONE TODO [Listagem de placas]: adicionar botão editar na tabela HTML
// DONE TODO [Listagem de placas]: adicionar rotina de edição de placas
// DONE TODO [Listagem de placas]: adicionar coluna de status na tabela HTML (cor identificação)


//variaveis

var inputNomeJogo = document.querySelector("#jogo");
var inputNomePersonagem = document.querySelector("#personagem");
var botaoSalvarPersonagem = document.querySelector("#gravar");
var botaoLimparTabela = document.querySelector("#limpar");
var botaoResetarSistema = document.querySelector("#resetar");
var seletorStatusPersonagem = document.querySelector("#mortoVivo");
var botaoExcluir = document.querySelector("button");
var mortoBackground = document.querySelector("#mortoBackground");
var vivoBackground = document.querySelector("#vivoBackground");
var MsgErros = document.querySelector("#MsgErros");
var idUsuario = document.querySelector("#idUsuario")


var listaDePersonagens = JSON.parse(localStorage.getItem("ListaDePersonagens")) || [];

carregarTabelaDePersonagens();

var htmlTabela = '';

// Botão salvar

botaoSalvarPersonagem.addEventListener("click", () => {
      
      let mensagensDeErro = "";
      let houveErro = false;

      if (inputNomeJogo.value == "") {
            mensagensDeErro += `Preencha com o campo Nome!<br>`;
            houveErro = true;
      }

      if (inputNomePersonagem.value.length == 0) {
            mensagensDeErro += `Preencha com o campo Personagem!<br>`;
            houveErro = true;
      }

      if (seletorStatusPersonagem.value == "") {
            mensagensDeErro += `Preencha com o campo Status!<br>`;
            houveErro = true;
      }

      if (personagemJaExiste(inputNomePersonagem.value) && inputNomePersonagem.value.length > 0) {
            mensagensDeErro += `Esse personagem já existe!<br>`;
            houveErro = true;
      }

      if (houveErro) {
            ApareceDivErros();
            MsgErros.innerHTML = mensagensDeErro;
            return
      } else {
            MsgErros.innerHTML = "Sucesso!!!";
            ApareceMsgSucesso();
      }

    
      var nomeDoJogo = inputNomeJogo.value;
      localStorage.setItem("Jogo", nomeDoJogo);

      var nomeDoPersonagem = inputNomePersonagem.value;
      var novoId = gerarNovoId();
      localStorage.setItem("identity", novoId);

      var statusSelecionado = seletorStatusPersonagem.value;

      if (statusSelecionado === "morto") {
            localStorage.setItem("StatusPersonagem", statusSelecionado);
           
      }else if(statusSelecionado === "vivo"){
            localStorage.setItem("StatusPersonagem", statusSelecionado);
            
            
      }else if (statusSelecionado === "") {
            console.log("Marque vivo ou morto");
            return;
      }

      var jogoSalvo = localStorage.getItem("Jogo");
      var statusSalvo = localStorage.getItem("StatusPersonagem");

      listaDePersonagens.push({
            id: `${novoId}`,
            jogo: ` ${jogoSalvo}`,
            nome: `${nomeDoPersonagem}`,
            status: `${statusSalvo}`,
      });

      localStorage.setItem("ListaDePersonagens", JSON.stringify(listaDePersonagens));

      carregarTabelaDePersonagens();

      document.getElementById('linhas').innerHTML = htmlTabela;
      limparCamposDoFormulario();
});

// Botão limpar

botaoLimparTabela.addEventListener("click", () => {
      document.getElementById('linhas').innerHTML = '';
});

// Botão resetar

botaoResetarSistema.addEventListener('click', () => {
      localStorage.clear();
      window.location.reload(); //Recarrega a pagina
});

// Funções

function ApareceDivErros(){
      MsgErros.classList.remove("EscondeDiv")
      MsgErros.classList.add("ApareceDiv")
      MsgErros.classList.remove("alert-success")
      MsgErros.classList.add("alert-danger")
}

function ApareceMsgSucesso(){
      MsgErros.classList.remove("EscondeDiv")
      MsgErros.classList.add("ApareceDiv")
      MsgErros.classList.remove("alert-danger")
      MsgErros.classList.add("alert-success")
      
}

function limparCamposDoFormulario() {
      inputNomeJogo.value = '';
      inputNomePersonagem.value = '';
}

function personagemJaExiste(nomePersonagem) {
      let personagensSalvos = JSON.parse(localStorage.getItem("ListaDePersonagens"));

      if (personagensSalvos == null) return false;

      let personagemEncontrado = personagensSalvos.find((p) => p.nome == nomePersonagem);
      return personagemEncontrado ? true : false;
}

function gerarNovoId() {
      let idAtual = localStorage.getItem("identity");

      if (idAtual == null) {
            idAtual = 0;
      } else {
            idAtual = parseInt(idAtual);
      }

      return (idAtual += 1);
}

function excluirPersonagemPorId(idPersonagem) {
      let personagensSalvos = JSON.parse(localStorage.getItem("ListaDePersonagens"));

      let novaLista = personagensSalvos.filter((p) => parseInt(p.id) !== parseInt(idPersonagem));
      if(novaLista){
            localStorage.removeItem("ListaDePersonagens")
             localStorage.setItem("ListaDePersonagens", JSON.stringify(novaLista));
            window.location.reload();
           
             
      }
      localStorage.removeItem("ListaDePersonagens")
      window.location.reload();

      localStorage.setItem("ListaDePersonagens", JSON.stringify(novaLista));

      
      
      carregarTabelaDePersonagens();
}


function corDeFundoVivoOuMorto(status){
      if(status == "morto"){
            html = `<span  class="bg-danger text-white">${status.toUpperCase()}</span>`
      }else if(status == "vivo"){
           html = `<span  class="bg-success text-white">${status.toUpperCase()}</span>`
      }

      return html
}

function AparecerDadosPersonagemParaEdicaoNosInputs(idPersonagem, jogoPersonagem, nomePersonagem, statusPersonagem){
      //Aqui aparece o id do usuario não editavel
      idUsuario.classList.remove("EscondeDiv")
      idUsuario.classList.add("ApareceDiv")
      var pegandoId = idPersonagem 
      idUsuario.innerHTML = `Usuário: ${pegandoId}` 

      //Aqui o resto dos dados

     inputNomeJogo.value = jogoPersonagem
     inputNomePersonagem.value = nomePersonagem
     seletorStatusPersonagem.value = statusPersonagem

     //Aparecer o botao pra gravar a edição obs: mds do ceu que tristeza
      var gravaEdicao = document.querySelector("#gravaEdicao");
      gravaEdicao.classList.remove("EscondeDiv");
      gravaEdicao.classList.add("ApareceDiv");


     gravaEdicao.addEventListener("click", () =>{
       var listaDePersonagens = JSON.parse(localStorage.getItem("ListaDePersonagens")) || [];
           

           

      var personagemEncontrado = listaDePersonagens.find((primeiroID) => primeiroID.id == idPersonagem);

      if(personagemEncontrado){
            excluirPersonagemPorId(idPersonagem)
            var listaDePersonagens = JSON.parse(localStorage.getItem("ListaDePersonagens")) || [];

            localStorage.setItem("identity", pegandoId)
            localStorage.setItem("Jogo", inputNomeJogo.value);
            localStorage.setItem("nome",  inputNomePersonagem.value);
            localStorage.setItem("StatusPersonagem", seletorStatusPersonagem.value);

            var novoId = localStorage.getItem("identity")
            var novoJogo =  localStorage.getItem("Jogo");
            var novoNome = localStorage.getItem("nome");
            var novoStatus = localStorage.getItem("StatusPersonagem")

            listaDePersonagens.push({
            id: `${novoId}`,
            jogo: ` ${novoJogo}`,
            nome: `${novoNome}`,
            status: `${novoStatus}`,
            });


            localStorage.setItem("ListaDePersonagens", JSON.stringify(listaDePersonagens));
    

          
      }
     

     })
}





function carregarTabelaDePersonagens() {
      let dadosPersonagens = JSON.parse(localStorage.getItem('ListaDePersonagens')) || [];

      htmlTabela = '';
      dadosPersonagens.forEach((personagem) => {
            htmlTabela += "<tr>";
            htmlTabela += `<td>${personagem.id}</td>`;
            htmlTabela += `<td>${personagem.jogo.toUpperCase()}</td>`;
            htmlTabela += `<td>${personagem.nome.toUpperCase()}</td>`;
            htmlTabela += `<td>${corDeFundoVivoOuMorto(personagem.status)}</td>`;
            htmlTabela += `<td><button type="button" class="btn btn-warning" onclick="AparecerDadosPersonagemParaEdicaoNosInputs(${personagem.id}, '${personagem.jogo}', '${personagem.nome}', '${personagem.status}')">Editar</button> <button type="button" class="btn btn-danger" onclick="excluirPersonagemPorId(${personagem.id})">Excluir</button></td>`;
            
            htmlTabela += "</tr>";
      });

      document.getElementById('linhas').innerHTML = htmlTabela;
}

