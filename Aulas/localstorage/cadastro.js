// Variáveis

const btn_Gravar = document.querySelector("#gravar");
const btn_Resetar = document.querySelector("#resetar");
var nome = document.querySelector("#nome");
var slct_sexo = document.querySelector("#sexo");
var slct_status = document.querySelector("#status");
var listaPessoas = JSON.parse(localStorage.getItem("lista")) || [];
var html = '';
let idEditando = null;
let divErros = document.querySelector("#alert")

// Carregar lista
carregarLista();

btn_Gravar.addEventListener("click", () => {
      
    let mensagensDeErro = "";
    let erros = false;

    if(nome.value == '' || nome.value.length === 0){
        aparecerDivErros()
        mensagensDeErro += "Preencha com o Nome!!" + "<br>"
        erros = true;
    } 

    if(slct_sexo.value == '' || slct_sexo.value.length === 0){
        aparecerDivErros()
        mensagensDeErro += "Preencha com o Sexo!!" + "<br>"
        erros = true;
    }

    if(slct_status.value == '' || slct_status.value.length === 0){
        aparecerDivErros()
        mensagensDeErro += "Preencha com o Status!!" + "<br>"
        erros = true;
    }

    if (erros) {
        aparecerDivErros(); 
        divErros.innerHTML = mensagensDeErro;
        return; 
    } else {
        aparecerDivErros();
        divErros.classList.remove("alert-danger");
        divErros.classList.add("alert-success");
        divErros.innerHTML = "Sucesso!!";
    }


    


    //nome
    localStorage.setItem("nome", nome.value);

    //Sexo
    if (slct_sexo.value == 'masculino') {
        localStorage.setItem("sexo", slct_sexo.value);
    } else if (slct_sexo.value == 'feminino') {
        localStorage.setItem("sexo", slct_sexo.value);
    } else {
        console.log("preencha com o sexo");
    }

    //Status
    if (slct_status.value == 'ativo') {
        localStorage.setItem("status", slct_status.value);
    } else if (slct_status.value == 'inativo') {
        localStorage.setItem("status", slct_status.value);
    } else {
        console.log("preencha com o status");
    }

    //pegando no local storage
    var pegandoNome = localStorage.getItem("nome");
    var pegandoSexo = localStorage.getItem("sexo");
    var pegandoStatus = localStorage.getItem("status");

    if (idEditando) {

        // Caso esteja editando atualiza lista
        listaPessoas = listaPessoas.map(pessoa => {
            if (pessoa.id === idEditando) {
                return {
                    id: pessoa.id,
                    nome: pegandoNome,
                    sexo: pegandoSexo,
                    status: pegandoStatus
                };
            } else {
                return pessoa;
            }
        });

    } else {
        
        // Caso seja novo usuário
        var idNovo = incrementaCodigo();
        localStorage.setItem("identity", idNovo); 
        listaPessoas.push({
            id: `${idNovo}`,
            nome: pegandoNome,
            sexo: pegandoSexo,
            status: pegandoStatus
        });

    }

 
    localStorage.setItem("lista", JSON.stringify(listaPessoas));

    carregarLista();
    
    // Limpa os campos e o ID de edição
    nome.value = "";
    slct_sexo.value = "";
    slct_status.value = "";
    idEditando = null;

});


btn_Resetar.addEventListener("click", () =>{
    localStorage.clear()
    window.location.reload()
})

// Funções

function aparecerDivErros(){
    divErros.classList.remove("esconder")
    divErros.classList.add("aparecer")
    divErros.classList.remove("alert-success")
    divErros.classList.add("alert-danger")
}
function esconderDivErros(){
    divErros.classList.remove("aparecer")
    divErros.classList.add("esconder")
}

function incrementaCodigo() {
    let idAtual = localStorage.getItem("identity");

    if (idAtual == null) {
        idAtual = 0;
    } else {
        idAtual = parseInt(idAtual);
    }

    return idAtual + 1;
}

function carregarLista() {
    var dadosPessoas = JSON.parse(localStorage.getItem('lista')) || [];
    html = '';

    dadosPessoas.forEach((pessoa) => {
        html += `<tr>`;
        html += `<td>${pessoa.id}</td>`;
        html += `<td>${pessoa.nome}</td>`;
        html += `<td>${pessoa.sexo}</td>`;
        html += `<td>${pessoa.status}</td>`;
        html += `<td><button class="btn btn-warning" onclick="editarUsuario('${pessoa.id}')">Editar</button></td>`;
        html += `<td><button class="btn btn-danger" onclick="excluirUsuario('${pessoa.id}')">Excluir</button></td>`;
        html += `</tr>`;
    });

    document.getElementById("linhas").innerHTML = html;
}

function excluirUsuario(idPessoa) {
    var dadosPessoas = JSON.parse(localStorage.getItem('lista')) || [];

    const novaListaPessoas = dadosPessoas.filter(pessoa => pessoa.id !== idPessoa);

    localStorage.setItem("lista", JSON.stringify(novaListaPessoas));

    carregarLista();

    window.location.reload()
}

function editarUsuario(idPessoa) {
    var dadosPessoas = JSON.parse(localStorage.getItem('lista')) || [];

    // Encontra a pessoa pela ID
    const pessoaSelecionada = dadosPessoas.find(pessoa => pessoa.id === idPessoa);

    if (pessoaSelecionada) {
        nome.value = pessoaSelecionada.nome;
        slct_sexo.value = pessoaSelecionada.sexo;
        slct_status.value = pessoaSelecionada.status;
        idEditando = idPessoa; 
    }
}
