/**
 * Created by programacao01 on 05/08/2015.
 */
function velocidade() {
    var km = document.getElementById ('km').value;
    var mensagem;
    if (km <= 50){
         mensagem  = "Motorista Exemplar!";
    } else{
        if(km <= 70){
            mensagem = "Motorista Imprudente!"

        }else{
            mensagem = "Motorista Perigoso!"
        }
    }
    alert(mensagem);
}