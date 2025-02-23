function calcularIMC(){

    //Entrada de dados
    let peso = document.getElementById("Peso").value;
    let altura = document.getElementById("Altura").value;

    // Processamento
    let valorImc = (peso)/(altura * altura);

    //Saída
    document.getElementById("resultado").textContent=  "IMC: " + valorImc.toFixed(2);

}