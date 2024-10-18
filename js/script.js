const nome = document.getElementById("nome");
const capital = document.getElementById("capital");
const juros = document.getElementById("juros");
const meses = document.getElementById("meses");

function calcularRetorno() {
    let capitalInicial = parseFloat(capital.value);
    let taxaJuros = parseFloat(juros.value) / 100; 
    let numMeses = parseInt(meses.value);

    
    let valorDeInvestimento = capitalInicial * Math.pow((1 + taxaJuros), numMeses);
    let retorno = ((valorDeInvestimento - capitalInicial) / capitalInicial) * 100;

    let msg = nome.value + ", seu retorno será de: " + retorno.toFixed(2) + "%";
    alert(msg);

    return false; 
}
