/**
 * Created by programacao01 on 03/08/2015.
 */
/*Mudar o texto do elemento por id*/
document.getElementById('title').innerHTML = 'Infotek';

/*atribui uma imagem para propriedade SRC*/
var logo = document.getElementById('logo');
logo.src = "http://infotektecnologia.com.br/Logo-inftek.png";

/*Envio de formulario e checagem de valor*/
function auth() {
    var user = document.getElementById('user');
    if (user.value === 'TreinaWeb') {
        alert("Login Correto");
    }
    else
        alert("Login incorreto");
}

/* modificar o estilo do objeto*/
//document.getElementById('TreinaWeb').style.fontSize = '100px';

function acessibilidade(acao){
    if(acao == 'diminuir')
        document.getElementById('TreinaWeb').style.fontSize = '8px';
    else if(acao == 'aumentar')
        document.getElementById('TreinaWeb').style.fontSize = '100px';
}