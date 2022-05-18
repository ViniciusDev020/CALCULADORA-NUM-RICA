



function calcular(x) {
    let igual = document.getElementById('igual');
    let sinal = document.getElementById('sinal');
    let numberone = document.getElementById('numberone');
    let numbertwo = document.getElementById('numbertwo');
    var result = document.getElementById('result');
    var resultop = '';

    if (x.value == ' + ') {


        sinal.setAttribute('value', ' + ')

        igual.setAttribute('value', ' + ')

        let somar = parseFloat(numberone.value) + parseFloat(numbertwo.value);

        resultop = somar;

        console.log(resultop);
    }

    if (x.value == ' - ') {



        sinal.setAttribute('value', ' - ')

        igual.setAttribute('value', ' - ')

        let subtrair = parseFloat(numberone.value) - parseFloat(numbertwo.value);

        resultop = subtrair;
    }

    if (x.value == ' x ') {

        sinal.setAttribute('value', ' x ')

        igual.setAttribute('value', ' x ')

        let multiplicar = parseFloat(numberone.value) * parseFloat(numbertwo.value);

        resultop = multiplicar;
    }

    if (x.value == ' ÷ ') {

        sinal.setAttribute('value', ' ÷ ')

        igual.setAttribute('value', ' ÷ ')

        let dividir = parseFloat(numberone.value) / parseFloat(numbertwo.value);

        resultop = dividir;
    }



    result.innerHTML = resultop;

    result.style.display = 'none';




}




function showresult() {


    var result = document.getElementById('result');

    var valorum = document.getElementById('valorum');
    var valordois = document.getElementById('valordois');
    let sinal = document.getElementById('sinal');

    sinal.value = '';

    result.style.display = 'block';
    valorum.style.display = 'none';
    valordois.style.display = 'none';
    sinal.style.display = 'none';







}




function digvalue(x) {

    let valorum = document.getElementById('valorum');
    let numberone = document.getElementById('numberone');

    numberone.value += parseFloat(x.value);

    valorum.innerHTML = + numberone.value;

  
   
}





function digvaluetwo(x) {



    let numbertwo = document.getElementById('numbertwo');

    numbertwo.value += parseFloat(x.value);

    let valordois = document.getElementById('valordois');

    valordois.innerHTML = + numbertwo.value;


}


function alterar(x){

    var result = document.getElementById('result');
    
    result.innerHTML = x.value;
}






function mudarinput() {

    let zero = document.getElementsByClassName('botao')[0];
    let um = document.getElementsByClassName('botao')[1];
    let dois = document.getElementsByClassName('botao')[2];
    let tres = document.getElementsByClassName('botao')[3];
    let quatro = document.getElementsByClassName('botao')[4];
    let cinco = document.getElementsByClassName('botao')[5];
    let seis = document.getElementsByClassName('botao')[6];
    let sete = document.getElementsByClassName('botao')[7];
    let oito = document.getElementsByClassName('botao')[8];
    let nove = document.getElementsByClassName('botao')[9];

    zero.setAttribute('onclick', 'digvaluetwo(this)')
    um.setAttribute('onclick', 'digvaluetwo(this)')
    dois.setAttribute('onclick', 'digvaluetwo(this)')
    tres.setAttribute('onclick', 'digvaluetwo(this)')
    quatro.setAttribute('onclick', 'digvaluetwo(this)')
    cinco.setAttribute('onclick', 'digvaluetwo(this)')
    seis.setAttribute('onclick', 'digvaluetwo(this)')
    sete.setAttribute('onclick', 'digvaluetwo(this)')
    oito.setAttribute('onclick', 'digvaluetwo(this)')
    nove.setAttribute('onclick', 'digvaluetwo(this)')




}







function resetar() {

    let result = document.getElementById('result');
    let sinal = document.getElementById('sinal');

    let numberone = document.getElementById('numberone');
    let valorum = document.getElementById('valorum');

    numberone.value = '';
    valorum.innerHTML = numberone.value;

    let numbertwo = document.getElementById('numbertwo');
    let valordois = document.getElementById('valordois');

    numbertwo.value = '';
    valordois.innerHTML = numbertwo.value;

    sinal.value = '';


    result.style.display = 'none';
    valorum.style.display = 'inline-block';
    valordois.style.display = 'inline-block';
    sinal.style.display = 'inline-block';







    let zero = document.getElementsByClassName('botao')[0];
    let um = document.getElementsByClassName('botao')[1];
    let dois = document.getElementsByClassName('botao')[2];
    let tres = document.getElementsByClassName('botao')[3];
    let quatro = document.getElementsByClassName('botao')[4];
    let cinco = document.getElementsByClassName('botao')[5];
    let seis = document.getElementsByClassName('botao')[6];
    let sete = document.getElementsByClassName('botao')[7];
    let oito = document.getElementsByClassName('botao')[8];
    let nove = document.getElementsByClassName('botao')[9];

    zero.setAttribute('onclick', 'digvalue(this); diminuir()')
    um.setAttribute('onclick', 'digvalue(this); diminuir()')
    dois.setAttribute('onclick', 'digvalue(this); diminuir()')
    tres.setAttribute('onclick', 'digvalue(this); diminuir()')
    quatro.setAttribute('onclick', 'digvalue(this); diminuir()')
    cinco.setAttribute('onclick', 'digvalue(this); diminuir()')
    seis.setAttribute('onclick', 'digvalue(this); diminuir()')
    sete.setAttribute('onclick', 'digvalue(this); diminuir()')
    oito.setAttribute('onclick', 'digvalue(this); diminuir()')
    nove.setAttribute('onclick', 'digvalue(this); diminuir()')





}




function addpontoum() {

    let botao = document.getElementsByClassName('botao')[10];

    let numberone = document.getElementById('numberone');

    let valorum = document.getElementById('valorum');

    numberone.value += '.';

    valorum.innerHTML = numberone.value;


    botao.setAttribute('onclick', 'addpontodois()')

}


function addpontodois() {


    let numbertwo = document.getElementById('numbertwo');

    let valordois = document.getElementById('valordois');

    numbertwo.value += '.';

    valordois.innerHTML = numbertwo.value;

    let botao = document.getElementsByClassName('botao')[10];


    botao.setAttribute('onclick', 'addpontoum()')
}






function aumentar() {

    let valorum = document.getElementById('valorum');
    let numberone = document.getElementById('numberone');
    let result = document.getElementById('result');
    let sinal = document.getElementById('sinal');
    

    let valordois = document.getElementById('valordois')


    if (numberone.value < 10000000) {

        valorum.style.fontSize = '26px';
        valordois.style.fontSize = '26px';
        result.style.fontSize = '26px';
        sinal.style.fontSize = '20px';
    }


}


function diminuir() {

    let valorum = document.getElementById('valorum');
    let numberone = document.getElementById('numberone');
    let result = document.getElementById('result');
    let sinal = document.getElementById('sinal');
   

    let valordois = document.getElementById('valordois')


    if (numberone.value >= 10000000) {

        valorum.style.fontSize = '12px';
        valordois.style.fontSize = '12px';
        result.style.fontSize = '12px';
        sinal.style.fontSize = '9px';
    }

    


}




function mudarback() {


    let range = document.getElementById('range').value;
    let s = document.styleSheets[0].cssRules[38].style;
    let rangec = s.parentRule;
    let back  = document.getElementById('body');
    let teclado = document.getElementById('teclado');
    let visor = document.getElementById('visor');
    let del = document.getElementById('del');
    let reset = document.getElementById('reset');
  
    let header = document.getElementById('header');
    let ranges = document.getElementById('range');
    let botoes1 = document.getElementsByClassName('botoes')[0];
    let botoes2 = document.getElementsByClassName('botoes')[1];
    let botoes3 = document.getElementsByClassName('botoes')[2];
    let botoes33 = document.getElementsByClassName('botoes')[3];
    let botoes4 = document.getElementsByClassName('botoes')[4];
    let botoes5 = document.getElementsByClassName('botoes')[5];
    let botoes6 = document.getElementsByClassName('botoes')[6];
    let botoes7 = document.getElementsByClassName('botoes')[7];
    let botoes8 = document.getElementsByClassName('botoes')[8];
    let botoes9 = document.getElementsByClassName('botoes')[9];
    let botoes10 = document.getElementsByClassName('botoes')[10];
    let botoes11= document.getElementsByClassName('botoes')[11];
    let botoes12 = document.getElementsByClassName('botoes')[12];
    let botoes13 = document.getElementsByClassName('botoes')[13];
    let botoes14 = document.getElementsByClassName('botoes')[14];
    let botoes15 = document.getElementsByClassName('botoes')[15];
    let valorum = document.getElementById('valorum');
    let valordois = document.getElementById('valordois');
    let result = document.getElementById('result');
    let sinal = document.getElementById('sinal');
    let igualdois = document.getElementById('igualdois');
    let calc = document.getElementsByClassName('calc')[0];

    
   

    if (range > 40 ){
    
    back.style.backgroundColor = 'whiteSmoke';
    teclado.style.backgroundColor = '#d3d3d3';
    visor.style.backgroundColor = 'white';
    del.style.backgroundColor = 'hsl(179, 83%, 32%)';
    del.style.boxShadow='0 2px rgb(199, 199, 199)'; 
    reset.style.backgroundColor = 'hsl(179, 83%, 32%)';
    reset.style.boxShadow='0 2px rgb(110, 110, 110';
    header.style.color = 'black';
    ranges.style.backgroundColor='#d3d3d3';
    rangec.style.backgroundColor='darkOrange';
    calc.style.background='none';

    

   
    

        botoes1.style.color = 'black'
        botoes2.style.color = 'black'
        botoes3.style.color = 'black'
        botoes33.style.color = 'black'
        botoes4.style.color = 'black'
        botoes5.style.color = 'black'
        botoes6.style.color = 'black'
        botoes7.style.color = 'black'
        botoes8.style.color = 'black'
        botoes9.style.color = 'black'
        botoes10.style.color = 'black'
        botoes11.style.color = 'black'
        botoes12.style.color = 'black'
        botoes13.style.color = 'black'
        botoes14.style.color = 'black'
        botoes15.style.color = 'none'
        igualdois.style.color = 'white'
        valorum.style.color = 'black';
        valordois.style.color = 'black';
        result.style.color = 'black';
        sinal.style.color='black';

        botoes1.style.backgroundColor = 'rgb(246, 242, 236)'
        botoes2.style.backgroundColor = 'rgb(246, 242, 236)'
        botoes3.style.backgroundColor = 'rgb(246, 242, 236)'
        botoes33.style.backgroundColor = 'rgb(246, 242, 236)'
        botoes4.style.backgroundColor = 'rgb(246, 242, 236)'
        botoes5.style.backgroundColor = 'rgb(246, 242, 236)'
        botoes6.style.backgroundColor= 'rgb(246, 242, 236)'
        botoes7.style.backgroundColor = 'rgb(246, 242, 236)'
        botoes8.style.backgroundColor = 'rgb(246, 242, 236)'
        botoes9.style.backgroundColor = 'rgb(246, 242, 236)'
        botoes10.style.backgroundColor = 'rgb(246, 242, 236)'
        botoes11.style.backgroundColor = 'rgb(246, 242, 236)'
        botoes12.style.backgroundColor = 'rgb(246, 242, 236)'
        botoes13.style.backgroundColor = 'rgb(246, 242, 236)'
        botoes14.style.backgroundColor = 'rgb(246, 242, 236)'
        igualdois.style.backgroundColor = 'darkOrange';


        botoes1.style.boxShadow = '0 2px rgb(172, 172, 142)';
        botoes2.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes3.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes33.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes4.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes5.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes6.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes7.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes8.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes9.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes10.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes11.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes12.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes13.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes14.style.boxShadow = '0 2px rgb(142, 142, 142)';
        igualdois.style.boxShadow = '0 2px darkRed';
        botoes15.style.boxShadow='none';


    
    }

    if(range < 10){

        back.style.backgroundColor = 'hsl(222, 26%, 31%)';
        teclado.style.backgroundColor='hsl(223, 31%, 20%)';
        visor.style.backgroundColor = 'hsl(224, 36%, 15%)';
        reset.style.backgroundColor = 'hsla(214, 24%, 54%, 0.663)';
        reset.style.boxShadow='0 2px rgba(37, 81, 114, 0.515)';
        del.style.backgroundColor = 'hsla(214, 24%, 54%, 0.663)';
        del.style.boxShadow='0 2px rgba(37, 81, 114, 0.515)';
        header.style.color = 'white';
        ranges.style.backgroundColor='black';
        rangec.style.backgroundColor='red';

        botoes1.style.color = 'black'
        botoes2.style.color = 'black'
        botoes3.style.color = 'black'
        botoes33.style.color = 'black'
        botoes4.style.color = 'black'
        botoes5.style.color = 'black'
        botoes6.style.color = 'black'
        botoes7.style.color = 'black'
        botoes8.style.color = 'black'
        botoes9.style.color = 'black'
        botoes10.style.color = 'black'
        botoes11.style.color = 'black'
        botoes12.style.color = 'black'
        botoes13.style.color = 'black'
        botoes14.style.color = 'black'
        botoes15.style.color = 'none'
        igualdois.style.color = 'white'
        valorum.style.color = 'white';
        valordois.style.color = 'white';
        result.style.color = 'white';
        sinal.style.color='white';

        botoes1.style.backgroundColor = 'white'
        botoes2.style.backgroundColor = 'white'
        botoes3.style.backgroundColor = 'white'
        botoes33.style.backgroundColor = 'white'
        botoes4.style.backgroundColor = 'white'
        botoes5.style.backgroundColor = 'white'
        botoes6.style.backgroundColor= 'white'
        botoes7.style.backgroundColor = 'white'
        botoes8.style.backgroundColor = 'white'
        botoes9.style.backgroundColor = 'white'
        botoes10.style.backgroundColor = 'white'
        botoes11.style.backgroundColor = 'white'
        botoes12.style.backgroundColor = 'white'
        botoes13.style.backgroundColor = 'white'
        botoes14.style.backgroundColor = 'white'
        botoes15.style.background = 'none'
        botoes15.style.boxShadow='none';
        igualdois.style.backgroundColor = '#df4d4d';


        botoes1.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes2.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes3.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes33.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes4.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes5.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes6.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes7.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes8.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes9.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes10.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes11.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes12.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes13.style.boxShadow = '0 2px rgb(142, 142, 142)';
        botoes14.style.boxShadow = '0 2px rgb(142, 142, 142)';
        igualdois.style.boxShadow = '0 2px rgba(193, 58, 58, 0.518)';

    }

    if(range > 90){

        back.style.backgroundColor = 'rgb(36, 1, 49)';
        teclado.style.backgroundColor='hsl(272, 89%, 14%)';
        visor.style.backgroundColor = 'hsl(272, 89%, 14%)';
        ranges.style.backgroundColor= 'hsl(272, 89%, 14%)';
        reset.style.backgroundColor = 'hsl(289, 86%, 28%)';
        reset.style.boxShadow='0 2px #9F4C93';
        del.style.backgroundColor = ' hsl(289, 86%, 28%)';
        del.style.boxShadow='0 2px #9F4C93'
        header.style.color = 'yellow';
        rangec.style.backgroundColor='aqua';


        botoes1.style.color = 'yellow'
        botoes2.style.color = 'yellow'
        botoes3.style.color = 'yellow'
        botoes33.style.color = 'yellow'
        botoes4.style.color = 'yellow'
        botoes5.style.color = 'yellow'
        botoes6.style.color = 'yellow'
        botoes7.style.color = 'yellow'
        botoes8.style.color = 'yellow'
        botoes9.style.color = 'yellow'
        botoes10.style.color = 'yellow'
        botoes11.style.color = 'yellow'
        botoes12.style.color = 'yellow'
        botoes13.style.color = 'yellow'
        botoes14.style.color = 'yellow'
        botoes15.style.color = 'none'
        igualdois.style.color = 'black'
        valorum.style.color = 'yellow';
        valordois.style.color = 'yellow';
        result.style.color = 'yellow';
        sinal.style.color='yellow';

        botoes1.style.backgroundColor = '#3E1456'
        botoes2.style.backgroundColor = '#3E1456'
        botoes3.style.backgroundColor = '#3E1456'
        botoes33.style.backgroundColor = '#3E1456'
        botoes4.style.backgroundColor = '#3E1456'
        botoes5.style.backgroundColor = '#3E1456'
        botoes6.style.backgroundColor= '#3E1456'
        botoes7.style.backgroundColor = '#3E1456'
        botoes8.style.backgroundColor = '#3E1456'
        botoes9.style.backgroundColor = '#3E1456'
        botoes10.style.backgroundColor = '#3E1456'
        botoes11.style.backgroundColor = '#3E1456'
        botoes12.style.backgroundColor = '#3E1456'
        botoes13.style.backgroundColor = '#3E1456'
        botoes14.style.backgroundColor = '#3E1456'
        botoes15.style.background = 'none'
        botoes15.style.boxShadow='none';
        igualdois.style.background ='rgb(35, 209, 209)'
        igualdois.style.boxShadow = '0 2px #249D9F';

        botoes1.style.boxShadow = '0 2px #9F4C93'
        botoes2.style.boxShadow = '0 2px #9F4C93'
        botoes3.style.boxShadow = '0 2px #9F4C93'
        botoes33.style.boxShadow = '0 2px #9F4C93'
        botoes4.style.boxShadow = '0 2px #9F4C93'
        botoes5.style.boxShadow = '0 2px #9F4C93'
        botoes6.style.boxShadow = '0 2px #9F4C93'
        botoes7.style.boxShadow = '0 2px #9F4C93'
        botoes8.style.boxShadow = '0 2px #9F4C93'
        botoes9.style.boxShadow = '0 2px #9F4C93'
        botoes10.style.boxShadow = '0 2px #9F4C93'
        botoes11.style.boxShadow = '0 2px #9F4C93'
        botoes12.style.boxShadow = '0 2px #9F4C93'
        botoes13.style.boxShadow = '0 2px #9F4C93'
        botoes14.style.boxShadow = '0 2px #9F4C93'
       


    }

   
}




function clarear(x){


    let botoes0 = document.getElementsByClassName('botoes')[0];
    let botoes1 = document.getElementsByClassName('botoes')[1];
    let botoes2 = document.getElementsByClassName('botoes')[2];
    let botoes3 = document.getElementsByClassName('botoes')[3];
    let botoes4 = document.getElementsByClassName('botoes')[4];
    let botoes5 = document.getElementsByClassName('botoes')[5];

    let botoes6 = document.getElementsByClassName('botoes')[6];
    let botoes7 = document.getElementsByClassName('botoes')[7];
    let botoes8 = document.getElementsByClassName('botoes')[8];
    let botoes9 = document.getElementsByClassName('botoes')[9];
    let botoes10 = document.getElementsByClassName('botoes')[10];
    let botoes11= document.getElementsByClassName('botoes')[11];

    let botoes12 = document.getElementsByClassName('botoes')[12];
    let botoes13 = document.getElementsByClassName('botoes')[13];
    let botoes14 = document.getElementsByClassName('botoes')[14];
    let botoes16= document.getElementsByClassName('botoes')[16];
    let botoes17= document.getElementsByClassName('botoes')[17];

    let igual = document.getElementsByClassName('igualdois')[0];




    if(x.value =='='){
        igual.style.animationName = 'brilho';
        igual.style.animationDuration = '0.5s';
        igual.style.animationIterationCount = 'infinite';

    }
    

    if(x.value ==0){
        botoes0.style.animationName = 'brilho';
        botoes0.style.animationDuration = '0.5s';
        botoes0.style.animationIterationCount = 'infinite';

    }

    if(x.value ==1){
        botoes1.style.animationName = 'brilho';
        botoes1.style.animationDuration = '0.5s';
        botoes1.style.animationIterationCount = 'infinite';

    }
    
    if(x.value ==2){
        botoes2.style.animationName = 'brilho';
        botoes2.style.animationDuration = '0.5s';
        botoes2.style.animationIterationCount = 'infinite';

    }

    if(x.value ==3){
        botoes3.style.animationName = 'brilho';
        botoes3.style.animationDuration = '0.5s';
        botoes3.style.animationIterationCount = 'infinite';

    }

    if(x.value ==4){
        botoes4.style.animationName = 'brilho';
        botoes4.style.animationDuration = '0.5s';
        botoes4.style.animationIterationCount = 'infinite';

    }







    if(x.value ==5){
        botoes5.style.animationName = 'brilho';
        botoes5.style.animationDuration = '0.5s';
        botoes5.style.animationIterationCount = 'infinite';

    }

    if(x.value ==6){
        botoes6.style.animationName = 'brilho';
        botoes6.style.animationDuration = '0.5s';
        botoes6.style.animationIterationCount = 'infinite';

    }
    
    if(x.value ==7){
        botoes7.style.animationName = 'brilho';
        botoes7.style.animationDuration = '0.5s';
        botoes7.style.animationIterationCount = 'infinite';

    }

    if(x.value ==8){
        botoes8.style.animationName = 'brilho';
        botoes8.style.animationDuration = '0.5s';
        botoes8.style.animationIterationCount = 'infinite';

    }

    if(x.value ==9){
        botoes9.style.animationName = 'brilho';
        botoes9.style.animationDuration = '0.5s';
        botoes9.style.animationIterationCount = 'infinite';

    }


    if(x.value =='DEL'){

        botoes17.style.animationName = 'brilho';
        botoes17.style.animationDuration = '0.5s';
        botoes17.style.animationIterationCount = 'infinite';
    }


    if(x.value ==' + '){

        botoes11.style.animationName = 'brilho';
        botoes11.style.animationDuration = '0.5s';
        botoes11.style.animationIterationCount = 'infinite';
    }

    if(x.value ==' - '){

        botoes12.style.animationName = 'brilho';
        botoes12.style.animationDuration = '0.5s';
        botoes12.style.animationIterationCount = 'infinite';
    }

    if(x.value ==' x '){

        botoes13.style.animationName = 'brilho';
        botoes13.style.animationDuration = '0.5s';
        botoes13.style.animationIterationCount = 'infinite';
    }


    if(x.value ==' ÷ '){

        botoes14.style.animationName = 'brilho';
        botoes14.style.animationDuration = '0.5s';
        botoes14.style.animationIterationCount = 'infinite';
    }

    if(x.value =='.'){

        botoes10.style.animationName = 'brilho';
        botoes10.style.animationDuration = '0.5s';
        botoes10.style.animationIterationCount = 'infinite';
    }

    if(x.value =='RESET'){

        botoes16.style.animationName = 'brilho';
        botoes16.style.animationDuration = '0.5s';
        botoes16.style.animationIterationCount = 'infinite';
    }

    


}
    



function cornormal(x){


    let botoes0 = document.getElementsByClassName('botoes')[0];
    let botoes1 = document.getElementsByClassName('botoes')[1];
    let botoes2 = document.getElementsByClassName('botoes')[2];
    let botoes3 = document.getElementsByClassName('botoes')[3];
    let botoes4 = document.getElementsByClassName('botoes')[4];
    let botoes5 = document.getElementsByClassName('botoes')[5];

    let botoes6 = document.getElementsByClassName('botoes')[6];
    let botoes7 = document.getElementsByClassName('botoes')[7];
    let botoes8 = document.getElementsByClassName('botoes')[8];
    let botoes9 = document.getElementsByClassName('botoes')[9];
    let botoes10 = document.getElementsByClassName('botoes')[10];
    let botoes11= document.getElementsByClassName('botoes')[11];

    let botoes12 = document.getElementsByClassName('botoes')[12];
    let botoes13 = document.getElementsByClassName('botoes')[13];
    let botoes14 = document.getElementsByClassName('botoes')[14];
    let botoes16= document.getElementsByClassName('botoes')[16];
    let botoes17= document.getElementsByClassName('botoes')[17];

    let igual = document.getElementsByClassName('igualdois')[0];


    if(x.value =='='){
        igual.style.animationName = 'none';
        igual.style.animationDuration = 'none';
        igual.style.animationIterationCount = 'none';

    }


    

    if(x.value ==0){
        botoes0.style.animationName = 'none';
        botoes0.style.animationDuration = 'none';
        botoes0.style.animationIterationCount = 'none';

    }

    if(x.value ==1){
        botoes1.style.animationName = 'none';
        botoes1.style.animationDuration = 'none';
        botoes1.style.animationIterationCount = 'none';

    }
    
    if(x.value ==2){
        botoes2.style.animationName = 'none';
        botoes2.style.animationDuration = 'none';
        botoes2.style.animationIterationCount = 'none';

    }

    if(x.value ==3){
        botoes3.style.animationName = 'none';
        botoes3.style.animationDuration = 'none';
        botoes3.style.animationIterationCount = 'none';

    }

    if(x.value ==4){
        botoes4.style.animationName = 'none';
        botoes4.style.animationDuration = 'none';
        botoes4.style.animationIterationCount = 'none';

    }







    if(x.value ==5){
        botoes5.style.animationName = 'none';
        botoes5.style.animationDuration = 'none';
        botoes5.style.animationIterationCount = 'none';

    }

    if(x.value ==6){
        botoes6.style.animationName = 'none';
        botoes6.style.animationDuration = 'none';
        botoes6.style.animationIterationCount = 'none';

    }
    
    if(x.value ==7){
        botoes7.style.animationName = 'none';
        botoes7.style.animationDuration = 'none';
        botoes7.style.animationIterationCount = 'none';

    }

    if(x.value ==8){
        botoes8.style.animationName = 'none';
        botoes8.style.animationDuration = 'none';
        botoes8.style.animationIterationCount = 'none';

    }

    if(x.value ==9){
        botoes9.style.animationName = 'none';
        botoes9.style.animationDuration = 'none';
        botoes9.style.animationIterationCount = 'none';

    }


    if(x.value =='DEL'){

        botoes17.style.animationName = 'none';
        botoes17.style.animationDuration = 'none';
        botoes17.style.animationIterationCount = 'none';
    }


    if(x.value ==' + '){

        botoes11.style.animationName = 'none';
        botoes11.style.animationDuration = 'none';
        botoes11.style.animationIterationCount = 'none';
    }

    if(x.value ==' - '){

        botoes12.style.animationName = 'none';
        botoes12.style.animationDuration = 'none';
        botoes12.style.animationIterationCount = 'none';
    }

    if(x.value ==' x '){

        botoes13.style.animationName = 'none';
        botoes13.style.animationDuration = 'none';
        botoes13.style.animationIterationCount = 'none';
    }


    if(x.value ==' ÷ '){

        botoes14.style.animationName = 'none';
        botoes14.style.animationDuration = 'none';
        botoes14.style.animationIterationCount = 'none';
    }

    if(x.value =='.'){

        botoes10.style.animationName = 'none';
        botoes10.style.animationDuration = 'none';
        botoes10.style.animationIterationCount = 'none';
    }

    if(x.value =='RESET'){

        botoes16.style.animationName = 'none';
        botoes16.style.animationDuration = 'none';
        botoes16.style.animationIterationCount = 'none';
    }

    

}









