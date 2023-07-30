var x1 = document.querySelector("#Loansize1");
var y1 = document.querySelector("#Percent1");
var z1 = document.querySelector("#Months1");
var x2 = document.querySelector("#Loansize2");
var y2 = document.querySelector("#Percent2");
var z2 = document.querySelector("#Months2");
var l = document.querySelector('#funct1');
l.addEventListener('click',function(){
    d = ((Number(x2.value) + Number(x2.value)/100*Number(y2.value))*Number(z2.value));
    b = ((Number(x1.value) + Number(x1.value)/100*Number(y1.value))*Number(z1.value));
    sol = 'Fill up the form'
    if(d > b){
        sol = '<'
    }else if(b > d){
        sol = '>'
    }else if(b == d){
        sol = '='
    }
    ol = b + ' ' + sol + ' ' + d
    document.querySelector("#solution").innerHTML = ol;
})