var x = document.querySelector('#sel_from');
var y = document.querySelector('#sel_to');
var z = document.querySelector('#Num0');
var r = document.querySelector('#sol_sel');
var l = document.querySelector('#funct');
var p = document.querySelector('#apf');
var rub = 1;
var crown = 1;
var canv = document.getElementById("myCanvas");
var ctx = canv.getContext("2d");
var date = new Date();
async function ddd() {
    console.log('ddsa');
    var rrr = ''
    const response = await fetch('https://openexchangerates.org/api/latest.json?app_id=2735d14579b645efb1fc5b6bd25fb4ce')   
        .then(resp => {return resp.text()})
        .then(resBody => {rrr = resBody})
    console.log(rrr)
    rub1 = rrr.slice(rrr.indexOf('RUB') + 1);
    rub1 = rub1.split(',')[0];
    rub1 = rub1.split(' ')[1];
    console.log(rub);
    crown1 = rrr.slice(rrr.indexOf('CZK') + 1);
    crown1 = crown1.split(',')[0];
    crown1 = crown1.split(' ')[1];
    rub1 = Number(rub1)
    crown1 = Number(crown1)
    return rub, crown;
}
ddd()
function Functi(){
    o = Number(z.value)
    console.log(o);
    console.log(rub1, crown1)

    if(x.value == '2'){
        o = o/rub1;
    } else if(x.value == '3'){
        o = o/crown1;
    }
    if(y.value == '1'){
        r.innerHTML = o;
    } else if(y.value == '2'){
        r.innerHTML = o * rub1;
    } else if(y.value == '3'){
        r.innerHTML = o * crown1;
    }
}
var rubcont = [];
var crowncont = [];
async function Mo(ppy, ppm, ppd, ll){
    var rrr1 = ''
    const response = await fetch('https://openexchangerates.org/api/historical/' + ppy + '-' + ppm + '-' + ppd + '.json?app_id=2735d14579b645efb1fc5b6bd25fb4ce')   
        .then(resp => {return resp.text()})
        .then(resBody => {rrr1 = resBody})
        .then(console.log(rrr1))
    rub = rrr1.slice(rrr1.indexOf('RUB') + 1);
    rub = rub.split(',')[0];
    rub = rub.split(' ')[1];
    
    crown = rrr1.slice(rrr1.indexOf('CZK') + 1);
    crown = crown.split(',')[0];
    crown = crown.split(' ')[1];
    rub = Number(rub);
    crown = Number(crown);
    rubcont[ll] = rub
    crowncont[ll] = crown
    return
}
function We(){
    day = date.getDate();
    dayc = [];
    month = date.getMonth();
    year = date.getFullYear();
    month = month + 1;
    day = day - 1;
    for(let i = 0; i < 6; i++){
        if(day-1 == 0){
            month = -1
            day = 31
        }
        dayc.push(day);
        day = day-1
    }
    for(let i = 0; i < 10; i++){
        if(month == i){
            month = String(month);
            month = '0' + month;
            break;
        }
    }
    for(let l = 0; l < dayc.length; l++){
        for(let i = 0; i < 10; i++){
            if(dayc[l] == i){
                dayc[l] = String(day);
                dayc[l] = '0', day;
                break;
            }
        }
    } 
    day = String(day);
    month = String(month);
    year = String(year);
    for(let i = 0; i < 6; i++){
        Mo(year, month, dayc[i], i);
    }
    rubcont[6] = rub1
}
function Draw(){
    We()
    minrub = Math.min.apply(null, rubcont);
    mincrown = Math.min.apply(null, crowncont);
    maxrub = Math.max.apply(null, rubcont);
    maxcrown = Math.max.apply(null, crowncont);
    rubcont1 = rubcont
    crowncont1 = crowncont
    console.log(rubcont)
    for(let i = 0; i < rubcont.length; i++){
        rubcont[i] = rubcont[i] - minrub;
        crowncont[i] = crowncont[i] - mincrown; 
    }
    maxrub = Math.max.apply(null, rubcont);
    minrub = Math.min.apply(null, rubcont);
    for(let i = 0; i < rubcont.length; i++){
        rubcont[i] = 100/maxrub * rubcont[i]
        crowncont[i] = 100/maxcrown * crowncont[i]
    }
    ctx.moveTo(0, rubcont[0])
    ccc = [200/6, 200/6 * 2, 200/6 *3, 200/6 * 4, 200/6 * 5, 200]
    for(let i = 1; i < 7; i++){
        ctx.lineTo(ccc[i-1], rubcont[i])
        console.log(rubcont[i])
        
    }
    ctx.stroke();
    return
}
Draw();