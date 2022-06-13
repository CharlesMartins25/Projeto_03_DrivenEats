let pratoSelecionado = 0;
let bebidaSelecionada = 0;
let sobremesaSelecionada = 0;
let valorPrato;
let valorBebida;
let valorSobremesa;
let somaPedido;
let somaAjustada;

function arredondarPreco(valor){
    valor = valor.replace("R$ ", "").replace(",", ".")
    valor = Number(valor) * 100;
    return valor;
}
function selecionandoPrato(elemento) {
    const selecionarPratos = document.querySelector(".pratos .selecionado");
    if(selecionarPratos !== null){
        selecionarPratos.classList.remove("selecionado")
    }
elemento.classList.add("selecionado")

let valor = elemento.querySelector(".valor").innerHTML;
pratoSelecionado = elemento.querySelector(".tipo").innerHTML;
valorPrato = arredondarPreco(valor)
console.log(valorPrato);
validarBotao()


}
function selecionandoBebibas(elemento){
    const selecionarBebidas = document.querySelector(".bebidas .selecionado");
    if (selecionarBebidas !== null){
        selecionarBebidas.classList.remove("selecionado")
    }
    elemento.classList.add("selecionado")
    let valor = elemento.querySelector(".valor").innerHTML;
    bebidaSelecionada = elemento.querySelector(".tipo").innerHTML;
    valorBebida = arredondarPreco(valor)
    console.log(valorBebida);
    validarBotao()
    
}
function selecionandoSobremesas(elemento){
    const selecionarSobremesas = document.querySelector(".sobremesas .selecionado");
    if (selecionarSobremesas !== null){
        selecionarSobremesas.classList.remove("selecionado")
    }
    elemento.classList.add("selecionado")
    let valor = elemento.querySelector(".valor").innerHTML;
    sobremesaSelecionada = elemento.querySelector(".tipo").innerHTML;
    valorSobremesa = arredondarPreco(valor)
    console.log(valorSobremesa);
    validarBotao()
    
}
function validarBotao(){
    if (valorPrato !== undefined && valorBebida !== undefined && valorSobremesa !== undefined){
        document.querySelector(".barraPedido").classList.add("ativarBotao")
      document.querySelector(".fazerPedido").innerHTML = "Finalizar pedido"
    }
        
}
function fecharPedido(){
    if (valorPrato === undefined && valorBebida === undefined && valorSobremesa === undefined){
        alert("Selecione 1 item de cada para prosegir com o pedido!")
    }
    else{
   somaPedido = (valorPrato + valorBebida + valorSobremesa)/100;
   somaAjustada = somaPedido.toFixed(2);
   nome = prompt('Qual seu nome?');
        endereco = prompt('Qual seu endereço?');
        textoMensagem = `Olá, gostaria de fazer o pedido:\n-Prato: ${pratoSelecionado}\n-Bebida: ${bebidaSelecionada}\n-Sobremesa:  ${sobremesaSelecionada}\nTotal: R$ ${somaAjustada}\n\nNome: ${nome}\nEndereço: ${endereco}`;
        window.open(`https://wa.me/5514991665553?text=${encodeURIComponent(textoMensagem)}`);
    }  
}
