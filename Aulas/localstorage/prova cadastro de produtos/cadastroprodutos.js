//variaveis
const btn_Gravar = document.querySelector("#gravar");
const inputTitulo = document.querySelector("#titulo");
const inputValor = document.querySelector("#valor");
const inputEstoque = document.querySelector("#estoque");
var listaProdutos = JSON.parse(localStorage.getItem("lista")) || [];
var html = '';
let idEditando = null;

carregarLista();

btn_Gravar.addEventListener("click", function(){
    //colocando localstorage
    localStorage.setItem("titulo", inputTitulo.value);
    localStorage.setItem("valor", inputValor.value);
    localStorage.setItem("estoque", inputEstoque.value);

    //pegando no localstorage
    var pegandoTitulo = localStorage.getItem("titulo");
    var pegandoValor = localStorage.getItem("valor");
    var pegandoEstoque = localStorage.getItem("estoque");

    if (idEditando) {

        // Caso esteja editando atualiza lista
        listaProdutos = listaProdutos.map(produto => {
            if (produto.id === idEditando) {
                return {
                    id: produto.id,
                    titulo: pegandoTitulo,
                    valor: pegandoValor,
                    estoque: pegandoEstoque
                };
            } else {
                return produto;
            }
        });

    } else {
        
        // Caso seja novo produto
        var idNovo = incrementaCodigo();
        localStorage.setItem("identity", idNovo); 
        listaProdutos.push({
            id: `${idNovo}`,
            titulo: pegandoTitulo,
            valor: pegandoValor,
            estoque: pegandoEstoque
        });

    }

 
    localStorage.setItem("lista", JSON.stringify(listaProdutos));

    carregarLista();
    
    // Limpa os campos e o ID de edição
    inputTitulo.value = "";
    inputValor.value = "";
    inputEstoque.value = "";
    idEditando = null;
})

// localStorage.clear()

//funcoes

function carregarLista() {
    var dadosProdutos = JSON.parse(localStorage.getItem('lista')) || [];
    html = '';

    dadosProdutos.forEach((produto) => {
        if(produto.estoque > 0){
            html += `<tr>`;
            html += `<td class="verde">${produto.id}</td>`;
            html += `<td class="verde">${produto.titulo}</td>`;
            html += `<td class="verde">${produto.valor}</td>`;
            html += `<td class="verde">${produto.estoque}</td>`;
            html += `<td class="verde"><button class="btn btn-warning" onclick="editarUsuario('${produto.id}')">Editar</button></td>`;
            html += `<td class="verde"><button class="btn btn-danger" onclick="zerarEstoque('${produto.id}')">ZerarEstoque</button></td>`;
            html += `</tr>`;
        }else if(produto.estoque == 0){
            html += `<tr>`;
            html += `<td class="amarelo">${produto.id}</td>`;
            html += `<td class="amarelo">${produto.titulo}</td>`;
            html += `<td class="amarelo">${produto.valor}</td>`;
            html += `<td class="amarelo">${produto.estoque}</td>`;
            html += `<td class="amarelo"><button class="btn btn-warning" onclick="editarUsuario('${produto.id}')">Editar</button></td>`;
            html += `<td class="amarelo"><button class="btn btn-danger" onclick="zerarEstoque('${produto.id}')">ZerarEstoque</button></td>`;
            html += `</tr>`;
        }else if(produto.estoque < 0){
            html += `<tr>`;
            html += `<td class="vermelho">${produto.id}</td>`;
            html += `<td class="vermelho">${produto.titulo}</td>`;
            html += `<td class="vermelho">${produto.valor}</td>`;
            html += `<td class="vermelho">${produto.estoque}</td>`;
            html += `<td class="vermelho"><button class="btn btn-warning" onclick="editarUsuario('${produto.id}')">Editar</button></td>`;
            html += `<td class="vermelho"><button class="btn btn-danger" onclick="zerarEstoque('${produto.id}')">ZerarEstoque</button></td>`;
            html += `</tr>`;
        }
    
    });

    document.getElementById("linhas").innerHTML = html;
}

function zerarEstoque(idprodutos) {
    let dadosProdutos = JSON.parse(localStorage.getItem('lista')) || [];

    dadosProdutos = dadosProdutos.map(produto => {
        if (produto.id === idprodutos) {
        return {
        id: produto.id,
        titulo: produto.titulo,
        valor: produto.valor,
        estoque: 0
        };

        }
        return produto;
    });

    localStorage.setItem("lista", JSON.stringify(dadosProdutos));
    window.location.reload()
    carregarLista(); 
}



function editarUsuario(idProduto) {
    var dadosProdutos = JSON.parse(localStorage.getItem('lista')) || [];

    const produtoSelecionado = dadosProdutos.find(produto => produto.id === idProduto);

    if (produtoSelecionado) {
        inputTitulo.value = produtoSelecionado.titulo;
        inputValor.value = produtoSelecionado.valor;
        inputEstoque.value = produtoSelecionado.estoque;
        idEditando = idProduto; 
    }
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