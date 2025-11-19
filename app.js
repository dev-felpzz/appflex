/**
 * appflex
 @author felipe pereira
 */

function calcular() {
    // variavel etanol recebe o conteudo da caixa do tipo input
    let etanol = frmflex.inputetanol.value
    console.log(etanol) // teste e apoio a lógica

    let gasolina = frmflex.inputgasolina.value
    console.log(gasolina)

    //Processamento
    //se valor do litro do etanol custar até 70% do valor da gasolina abastecer com Etanol
    if (etanol < 0.7 * gasolina) {
        console.log("abasteça com Etanol")
        // a linha abaixo troca a img no html
        document.getElementById("status").src = "./img/etanol.png"
    } else {
        console.log("abasteça com Gasolina")
        document.getElementById("status").src = "./img/gasolina.png"
    }
}
function limpar() {
    document.getElementById("status").src = "./img/neutro.png"
}

