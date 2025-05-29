
const pessoas = [
  { id: 1, nome: "Anna", idade: 26, sexo: "M", salario: 2000},
  { id: 2, nome: "rosé", idade: 30, sexo: "F", salario: 2300},
  { id: 3, nome: "lisa", idade: 26, sexo: "F", salario: 2200},
  { id: 4, nome: "jennie", idade: 35, sexo: "M", salario: 3000},
  { id: 5, nome: "jisoo", idade: 29, sexo: "F", salario: 4500},
  { id: 6, nome: "Laura", idade: 26, sexo: "M", salario: 3400}
]


//exibir dados com for
for(let i = 0; i < pessoas.length; i++){
    // const pessoa = pessoas[i]
    // console.log(`ID: ${pessoa.id}, nome: ${pessoa.nome}, idade: ${pessoa.idade}, sexo: ${pessoa.sexo}`)
}

//exibir dados com foreach

// pessoas.forEach((morango) => console.log(morango.nome + ' ' + morango.idade))

//map para criar um novo array
//Ele adiciona todos que tem idade maior ou igual a 30 anos dentro da variavel pessoasAcimade30
const salarioReajustado = pessoas.map((p) => p.salario + 1000)
// console.log(pessoas)
// console.log(salarioReajustado)

//filter para filtrar o array com varios elementos do array

const pessoasIdadeMaiorQue30 = pessoas.filter((sabado) => {
    if(sabado.idade >= 30){
        return sabado
    }
})
// console.log(pessoasIdadeMaiorQue30)

//find retorna somente o primeiro elemento que satisfaz a condição do array

const pessoaIdadeMaiorIgual30 = pessoas.find((maracuja) => maracuja.idade >= 30)

// console.log(pessoaIdadeMaiorIgual30)

//reduce

const totalSalarios = pessoas.reduce((soma, objetoAtual) => soma + objetoAtual.salario, 0)
// console.log("total salarios: " + totalSalarios)

/* RESUMO: map cria um novo array, filter vai filtrar somente os que forem true para determinada condição. 
Find é pra encontrar algo que é o primeiro a satisfazer a condição. 
Reduce para acumulador, mais utilizado para contas, forEach e for para exibir dados */

// const produtos = [
//     {id: 1, nome: "Produto 1", preco: 10.2, categoria: "C", estoque: -10},
//     {id: 2, nome: "Produto 2", preco: 20.5, categoria: "B", estoque: 1000},
//     {id: 3, nome: "Produto 3", preco: 40.03, categoria: "A", estoque: 1},
//     {id: 4, nome: "Produto 4", preco: 54.10, categoria: "B", estoque: 0},
//     {id: 5, nome: "Produto 5", preco: 100.30, categoria: "A", estoque: 90},
//     {id: 6, nome: "Produto 6", preco: 9.99, categoria: "C", estoque: 80}
// ]

/* utilizando todos os metodos */

// const filtragemCategoriaC = produtos.filter((pcgamer) => pcgamer.categoria == "C")
// console.log(filtragemCategoriaC)


// let arraynome = []

// const arraynomeAcima20 = produtos.map((hello) => {
//     if( hello.preco > 20){
//         arraynome.push(hello.nome)
//     }
// })

// console.log(arraynome);

// let estoqueMaiorQue0 = [];

// for(let i = 0; i < produtos.length; i++){
//     let produto = produtos[i]
//     if(produto.estoque > 0){
//         estoqueMaiorQue0.push(produto)
//     }
// }

// console.log(estoqueMaiorQue0)

// for(let multiplicando = 0; multiplicando <= 100; multiplicando++){
//     for(let multiplicador = 1; multiplicador <= 10; multiplicador++){
//         console.log(`${multiplicando} X ${multiplicador} = ${multiplicando * multiplicador}`);
//     }
// }


const produtos = [
    {id: 1, nome: "Produto 1", preco: 10.2, categoria: "C", estoque: -10},
    {id: 2, nome: "Produto 2", preco: 20.5, categoria: "B", estoque: 1000},
    {id: 3, nome: "Produto 3", preco: 40.03, categoria: "A", estoque: 1},
    {id: 4, nome: "Produto 4", preco: 54.10, categoria: "B", estoque: 0},
    {id: 5, nome: "Produto 5", preco: 100.30, categoria: "A", estoque: 90},
    {id: 6, nome: "Produto 6", preco: 9.99, categoria: "C", estoque: 80}
]


/* Fazer usando for, forEach, map, filter, find, reduce*/
// 1 - listar os produtos somente da categoria "C" - (For, ForEach, map, filter, find, reduce)
// 2 - criar um novo array somente com "nome" dos produtos acima de R$ 20,00 - (For, forEach, map, filter, find, reduce)
// 3 - criar um novo array somente com produtos que tenham estoque maior que 0 - (For, forEach, map, filter, find, reduce)
// 4 - criar um novo array somente com produtos onde o id é PAR - (For, forEach, map, filter, find, recuce)
// 5 - criar um novo array com apenas 1 produto da categoria "A" e estoque maior que 0 - (For, forEach, map, filter, find, reduce)
// 6 - criar um novo array com o preço dos produtos com 10% de desconto - (For, forEach, map, filter, find, reduce)


// const novaLista = produtos.filter((categoriaC) => categoriaC.categoria === "C")

// console.log(novaLista)

// const novoArray = produtos.reduce((acumulador, caro) => {
//     if(caro.preco > 20.00){
//         acumulador.push(caro.nome)
//     }
//     return acumulador
// }, [])

// console.log(novoArray)


// let arrayprodutos = []

// const novoArray = produtos.map((produtos) => {
//     if(produtos.estoque > 0){
//         arrayprodutos.push(produtos)
//     }
//     return produtos
// })

// console.log(arrayprodutos)

// const categoriaA = produtos.find((categoria) => categoria.categoria === "A")

// console.log(categoriaA)


// const desconto10Porcento = produtos.map((desconto) => desconto.preco - (desconto.preco * 0.1))


// console.log(desconto10Porcento)












                                   //Reduce<-----------------------

// console.log("Produtos Categoria C")

// produtos.reduce((amendobobo, yeah) => {
//     if(yeah.categoria == "C"){
//         console.log(yeah)
//     }
//     return amendobobo
// }, 2132422) /* o valor inicial não afeta nesse caso alias não estou fazendo nenhuma conta e ele só verifica a categoria C*/

// console.log("Nome dos produtos acima de R$ 20,00")

// let arrayacima20 = []

// produtos.reduce((gumball, darwin) => {
//     if(darwin.preco > 20){
//         arrayacima20.push(darwin.nome)
//     }

//     return gumball
// }, 0)

// console.log(arrayacima20)


// console.log("produtos que tenham estoque maior que 0 ")

// let estoqueMaiorQue0 = [];

// produtos.reduce((jujuba, marceline) => {
//     if(marceline.estoque > 0){
//         estoqueMaiorQue0.push(marceline)
//     }
//     return jujuba
// }, 3434234)

// console.log(estoqueMaiorQue0)

// console.log("produtos onde o id é PAR")

// let idpar = [];

// produtos.reduce((finn, jake) => {
//     if(jake.id % 2 == 0){
//         idpar.push(jake)
//     }
//     return finn
// }, 23213)

// console.log(idpar)

// console.log(" 1 produto da categoria A e estoque maior que 0")

// let arrayCategoriaA = [];

// produtos.reduce((joey, chandler) => {
//     if(chandler.estoque > 0 && chandler.categoria == "A" && arrayCategoriaA.length == 0){
//         arrayCategoriaA.push(chandler)
//     }
//     return joey
// }, 0)

// console.log(arrayCategoriaA)

// console.log("preço dos produtos com 10% de desconto");

// let desconto10Porcento = [];

// let conta = produtos.reduce((harley, ivy) => {
//     let conta = ivy.preco * 0.1
//     let valorFinal = ivy.preco - conta
//     desconto10Porcento.push(valorFinal)
//     return harley
// }, 0)

// console.log(desconto10Porcento)


                                    //Find <-----------------------


// console.log("Produtos Categoria C")

// produtos.find((madagascar) => {
//     if(madagascar.categoria == "C"){
//          console.log(madagascar)
//     }
       
// })

// console.log("Nome dos produtos acima de R$ 20,00")

// var acima20 = [];

// produtos.find((dc) => {
//     if(dc.preco > 20){
//         acima20.push(dc.nome)
//     }
// })

// console.log(acima20)

// console.log("produtos que tenham estoque maior que 0 ")

// var estoqueMaiorQue0 = [];

// produtos.find((supergirl) => {
//     if(supergirl.estoque > 0){
//         estoqueMaiorQue0.push(supergirl)
//     }
// })

// console.log(estoqueMaiorQue0)

// console.log("produtos onde o id é PAR")

// var idpar = [];

// produtos.find((joaofrango) => {
//     if(joaofrango.id % 2 == 0){
//         idpar.push(joaofrango)
//     }
// })

// console.log(idpar)

// console.log(" 1 produto da categoria A e estoque maior que 0")


// var cateAmaiorque0 = [];

// produtos.find((cadumaverick) => {
//     if(cadumaverick.categoria == "A" && cadumaverick.estoque > 0 && cateAmaiorque0.length == 0){
//         cateAmaiorque0.push(cadumaverick)
//     }
// })

// console.log(cateAmaiorque0)

// console.log("preço dos produtos com 10% de desconto");

// let desconto10Porcento = [];

// produtos.find((tortinhadelimao) => {
//     let conta = tortinhadelimao.preco * 0.1;
//     let valorFinal = tortinhadelimao.preco - conta
//     desconto10Porcento.push(valorFinal)
// })

// console.log(desconto10Porcento)



                                    //filter <-----------------------


// console.log("Produtos 10% de Desconto")

// var desconto10Porcento = [];

// produtos.filter((bobesponja) => {
//     let conta = bobesponja.preco * 0.1
//     let valorFinal = bobesponja.preco - conta
//     desconto10Porcento.push(valorFinal)
// })

// console.log(desconto10Porcento);

// console.log("Somente um produto da categoria A, com estoque maior que 0");

// var playstationArray = [];

// produtos.filter((playstation) => {
//     if(playstation.categoria == "A" && playstation.estoque > 0 && playstationArray == 0){
//         playstationArray.push(playstation)
//     }
// })

// console.log(playstationArray)

// console.log("Produtos somente com ID Par");

// var idparArr = [];

// produtos.filter((moranguinho) => {
//     if(moranguinho.id % 2 == 0){
//         idparArr.push(moranguinho)
//     }
// })

// console.log(idparArr)

// console.log("Produtos com estoque maior que 0")

// var maiorque0 = [];

// produtos.filter((mortadela) => {
//     if(mortadela.estoque > 0){
//         maiorque0.push(mortadela)
//     }
// })

// console.log(maiorque0)




// console.log("Nome dos produtos acima de R$ 20,00")

// var nomeAcima20ReaisArr = [];

// const nomeAcima20 = produtos.filter((n20) => {
//     if(n20.preco > 20){
//         nomeAcima20ReaisArr.push(n20.nome);
//     }
// })

// console.log(nomeAcima20ReaisArr)

// console.log("Produtos Categoria C")

// const categoriaC = produtos.filter((c) => {
//     if(c.categoria == "C"){
//         console.log(c);
//     }
// })


                                    //Map <-----------------------


// console.log("Produtos Categoria C")

// const checandoC = produtos.map((p) => {
//     if(p.categoria == "C"){
//        console.log(p);
//     }
// });

// console.log(ProdutosCategoriaC);

// console.log("Nome dos produtos acima de R$ 20,00")

// var acimade20Reais = [];

// const nomeAcima20Reais = produtos.map((q) => {
//     if(q.preco > 20){
//         acimade20Reais.push(q.nome);
//     }
// })

// console.log(acimade20Reais);

// console.log("Produtos com estoque maior que 0")

// var estoqueMaiorQue0 = [];

// const estoqueAcima0 = produtos.map((e) => {
//     if(e.estoque > 0){
//         estoqueMaiorQue0.push(e)
//     }
// })

// console.log(estoqueMaiorQue0);

// console.log("Produtos somente com ID Par");

// var produtosIdPar = [];

// const idpar = produtos.map((f) => {
//     if(f.id % 2 == 0){
//         produtosIdPar.push(f)
//     }
// })

// console.log(produtosIdPar);

// console.log("Somente um produto da categoria A, com estoque maior que 0")

// var somenteUmA = [];

// const somenteA = produtos.map((g) => {
//     if(g.categoria == "A" && g.estoque > 0 && somenteUmA.length === 0){
//         somenteUmA.push(g)
//     }
// })

// console.log(somenteUmA);


// console.log("Produtos 10% de Desconto")

// let desconto10Porcento = [];

// const salarioReajuste = produtos.map((t) => {
//     let calculoProduto = t.preco * 0.1;
//     let valorFinal =  t.preco - calculoProduto ;
//     desconto10Porcento.push(valorFinal)
// })

// console.log(desconto10Porcento);


                                    //ForEach <-----------------------

// console.log("Produtos Categoria C")

// produtos.forEach((morango) => {
//     if(morango.categoria === "C"){
//         console.log(`${morango.categoria}`)
//     }
// })

// console.log("Nome dos produtos acima de R$ 20,00")

// produtos.forEach((banana) => {
//     let valorNovo = [];
//     if(banana.preco > 20.00){
//         valorNovo.push(banana.nome)
//         console.log(valorNovo);
//     }
// })

// console.log("Produtos com estoque maior que 0")

// produtos.forEach((mamao) => {
//     let valorNovo = [];
//     if(mamao.estoque > 0){
//         valorNovo.push(mamao)
//         console.log(valorNovo)
//     }
// })

// console.log("Produtos somente com ID Par")

// produtos.forEach((abacaxi) => {
//     let ArrayPar = [];
//     if(abacaxi.id % 2 == 0){
//         ArrayPar.push(abacaxi)
//         console.log(ArrayPar);
//     }
// })

// console.log("Somente um produto da categoria A, com estoque maior que 0")

// let somenteUmA = [];
// produtos.forEach((melancia) => {
    
//     if(melancia.categoria == "A" && melancia.estoque > 0 && somenteUmA.length === 0){
//         somenteUmA.push(melancia)
        
//     }
// })

// console.log(somenteUmA)

// console.log("Produtos 10% de Desconto")

// let Desconto10Porcento = [];

// produtos.forEach((manga) => {
//    let calculoProduto = manga.preco * 0.1;
//     let valorFinal = manga.preco - calculoProduto;
//    Desconto10Porcento.push(valorFinal)
  
// })

// console.log(Desconto10Porcento);







                                    //For <-----------------------

// console.log("Produtos Categoria C")

// for(let i = 0; i < produtos.length; i++){
//     let produto = produtos[i];

   
//    if(produto.categoria === "C"){
   
//     console.log(produto);
//    }

// }


// console.log("Nome dos produtos acima de R$ 20,00")

// for(let i = 0; i < produtos.length; i++){
//     let produto = produtos[i];

//    if(produto.preco > 20.00){
//     let arrayProdutosNovos = [];
//     arrayProdutosNovos.push(produto.nome)
//     console.log(arrayProdutosNovos)
//    }
// }

// console.log("Produtos com estoque maior que 0")

// for(let i = 0; i < produtos.length; i++){
//     let produto = produtos[i];
//    if(produto.estoque > 0){
//     let arrayMaiorQue0 = [];
//     arrayMaiorQue0.push(produto)
//     console.log(arrayMaiorQue0)
//    }
// }


// console.log("Produtos somente com ID Par")

// for(let i = 0; i < produtos.length; i++){
//     let produto = produtos[i];

//     if(produto.id % 2 == 0){
//         console.log(produto)
//     }
// }

// console.log("Somente um produto da categoria A, com estoque maior que 0")

// for(let i = 0; i < produtos.length; i++){
//     let produto = produtos[i];

//     if(produto.categoria === "A" && produto.estoque > 0){
//         let arrayCategoriaA = []
//         arrayCategoriaA.push(produto)
//         console.log(arrayCategoriaA)
//         break;
// }
// }

// console.log("Produtos 10% de Desconto")

// let precoNovo = []

// for(let i = 0; i < produtos.length; i++){
//         let produto = produtos[i];

    
//     let calculoProduto =  produto.preco * 0.1
//     let totalDesconto = produto.preco - calculoProduto
//     precoNovo.push(totalDesconto)
    
  
// }

// console.log(precoNovo)
  







