/**
 * Created by programacao01 on 10/08/2015.
 */
function calcular(){
    var nome = document.getElementById('nome').value;
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;
    var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
    console.log(media);
    var result_status = document.getElementById('result_status');

    if (media < 4){
        result_status.innerHTML = "Você está reprovado!";
    }else{
        if(media < 6){
            result_status.innerHTML = "Você está de recuperação!";

        }else {
            result_status.innerHTML = "Você está aprovado!";
        }

    }
    document.getElementById('resultado').style.display = "block";
    document.getElementById('result_nome').innerHTML = "Nome: " + nome;
    document.getElementById('result_media').innerHTML = "("+nota1+"+"+nota2+"+"+nota3+")/3="+media;
}