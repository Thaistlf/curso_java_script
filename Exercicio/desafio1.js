/**
 * Created by programacao01 on 04/08/2015.
 */
function cadastro() {
    //Variaveis de escopo
    var nome = document.getElementById('nome');
    var sexo = document.getElementById('sexo');
    var idade = document.getElementById('idade');

    //Resultado
    var result_nome = document.getElementById('result_nome');
    var result_idade = document.getElementById('result_idade');
    var result_sexo = document.getElementById('result_sexo');
    var result_avatar = document.getElementById('result_avatar');
    var sexo_prefixo;

    result_nome.innerHTML = nome.value;
    if(sexo.value == 'feminino')
        sexo_prefixo = 'f';
    else
        sexo_prefixo = 'm';

    if (idade.value < 14) {
        result_idade.innerHTML = "Você é uma criança de " + idade.value + " anos!";
        if(sexo_prefixo == "f")
           result_avatar.src="http://www.colegiosmart.com.br/images/Programabil%C3%ADnguederecrea%C3%A7%C3%A3o,artesemovimentoshutterstock_101659057.jpg";
        else
            result_avatar.src="http://www.mensagenscomamor.com/images/interna/new/homenagem_a_crianca_dia_da_crianca.jpg";
    } else if (idade.value < 18) {
        result_idade.innerHTML = "Você é um adolescente de " + idade.value + "anos!";
        if(sexo_prefixo == "f")
            result_avatar.src="http://blog.tricae.com.br/wp-content/uploads/2014/01/1505636_554399937981934_38122633_n.jpg";
        else
            result_avatar.src="http://m.i.uol.com.br/estilo/2011/05/18/bebida-alcoolica-alcool-cerveja-adolescente-bebendo-1305729164432_300x300.jpg";
    } else {
        result_idade.innerHTML = "Você é um adulto de " + idade.value + " anos!";
        if(sexo_prefixo == "f")
            result_avatar.src="img/mulher.jpg";
        else
            result_avatar.src="img/homem.jpg";
    }

    document.getElementById('resultado').style.display = "block";
}

