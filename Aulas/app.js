//variaveis

var inputNome = document.querySelector("#nome");
var inputIdade = document.querySelector("#idade");
var inputAltura = document.querySelector("#altura");
var inputSalario = document.querySelector("#salario");
var ckbCasado = document.querySelector("#casado");
var ckbPhp = document.querySelector("#php");
var ckbJavascript = document.querySelector("#javascript");
var ckbJava = document.querySelector("#java");
var btn = document.querySelector("#gravar");
var btnExibir = document.querySelector("#exibir");
var divResultado = document.querySelector("#resultado");
var pessoa = {}


btn.addEventListener("click", function(){
    loadObject()
    console.log(pessoa)
    exibeCadastro()
})


btnExibir.addEventListener("click", exibeCadastro)

function loadObject(){
    pessoa.nome = inputNome.value;
    pessoa.idade = parseInt(inputIdade.value);
    pessoa.altura = parseFloat(inputAltura.value);
    pessoa.salario = parseFloat(inputSalario.value);
    pessoa.casado = ckbCasado.value;

    if(ckbCasado.checked){
        pessoa.casado = true
    }else{
        pessoa.casado = false
    }

    pessoa.conhecimentos = []

    if(ckbPhp.checked){
        pessoa.conhecimentos.push(ckbPhp.value)
    }

    if(ckbJavascript.checked){
        pessoa.conhecimentos.push(ckbJavascript.value)
    }

    if(ckbJava.checked){
        pessoa.conhecimentos.push(ckbJava.value)
    }
   
}


function exibeCadastro(){
    divResultado.innerHTML = `
    <p>Nome: ${pessoa.nome}</p>
    <p>Idade: ${pessoa.idade}</p>
    <p>Altura: ${pessoa.altura}</p>
    <p>Salario: ${pessoa.salario}</p> 
    <p>Casado: ${pessoa.casado}</p> 
    <p>Linguagens: ${pessoa.conhecimentos.join(", ")}</p> 
    `
}


// var pessoa = {
//     nome: nome.value,
//     idade: idade.value,
//     altura: altura.value,
//     salario: salario.value,
//     casado: casado.value,
//     conhecimentos: [
//         php.value, javascript.value, java.value
//     ]
// }


// console.log(pessoa)
// console.log(`Nome: ${pessoa.nome} - idade: ${pessoa.idade}`)

// var salarioNovo = pessoa.salario + 500;

// console.log(salarioNovo);

