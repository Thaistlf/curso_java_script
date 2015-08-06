/**
 * Created by programacao01 on 05/08/2015.
 */
function cadastro() {

    //tradução
    // variavel recebe um objeto da pagina html pelo id altura.
    var result_altura = document.getElementById('altura');
    var result_peso = document.getElementById('peso');
    //podemos colocar
    var result_imc = result_peso.value / (result_altura.value * result_altura.value);
    var mensagem;

    if (result_imc < 17) {
        mensagem = result_imc + ' Muito abaixo do peso!';
    } else {
        if (result_imc < 18.5) {
            mensagem = result_imc + ' Abaixo do peso!';
        } else {
            if (result_imc < 25) {
                mensagem = result_imc + 'Normal!';
            } else {
                if (result_imc < 30) {
                    mensagem = result_imc + 'Acima do peso!';
                } else {
                    if (result_imc < 35) {
                        mensagem = result_imc + 'Obesidade 1';
                    } else {
                        if (result_imc < 40) {
                            mensagem = result_imc + 'Obesidade 2';
                        } else {
                            mensagem = result_imc + 'Obesidade 3';
                        }
                    }
                }
            }
        }
    }
    //
    //var nome = 'thais';
    //switch (nome){
    //    case 'thais':
    //        alert('Meu nome é Thaís!');
    //        break;
    //    case 'diogo':
    //        alert("Meu nome é Diogo!");
    //        break;
    //    default:
    //        alert('Aminésia!');
    //}
    alert(mensagem);
}

