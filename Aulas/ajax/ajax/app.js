var botao = document.querySelector("#consultar");
var inputCep = document.querySelector("#inputcep");
var logradouro = document.querySelector("#logradouro")
var bairro = document.querySelector("#bairro");
var cidade = document.querySelector("#cidade");
var msg = document.querySelector("#msgErro")
botao.addEventListener("click", async () => {
    try{
        let url = `https://viacep.com.br/ws/${inputCep.value}/json/`;
    
        let response = await fetch(url);
    
        console.log(response)
    
        let cep = await response.json();
    
        console.log(cep);
    
        // let objCep = JSON.parse(cep);
    
        console.log(cep.logradouro);
        
        logradouro.value = cep.logradouro;
        bairro.value = cep.bairro;
        cidade.value = cep.localidade;
   
    }catch{
        msg.innerHTML = "Cep invalido";
        return
    }
    

    
})