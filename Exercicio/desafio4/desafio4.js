/**
 * Created by programacao01 on 06/08/2015.
 */
function calcular(){
    var result_nome = document.getElementById('nome').value;
    var result_nota1 = document.getElementById('nota1').value;
    var result_nota2 = document.getElementById('nota2').value;
    var result_nota3 = document.getElementById('nota3').value;
    var result_media = (parseFloat(result_nota1) + parseFloat(result_nota2) + parseFloat(result_nota3)) / 3;
    console.log(result_media);
    var mensagem;

    if (result_media < 4){
               mensagem = "Você está reprovado!";
    }else{
        if(result_media < 6){
               mensagem = "Você está de recuperação!";

        }else{
              mensagem = "Você está aprovado!";
        }

    }
    alert( result_nome + " " + mensagem);
}