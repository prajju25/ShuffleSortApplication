var numbers = [
    {
        id : 1,
        color : "#72c3dc"
    },{
        id : 2,
        color : "#2b8ead"
    },{
        id : 3,
        color : "#2f454e"
    },{
        id : 4,
        color : "#2b8ead"
    },{
        id : 5,
        color : "#2f454e"
    },{
        id : 6,
        color : "#bfbfbf"
    },{
        id : 7,
        color : "#bfbfbf"
    },{
        id : 8,
        color : "#72c3dc"
    },{
        id : 9,
        color : "#2f454e"
    }];
var container = null;

function init(){
    container = document.getElementById('cardSection');
    numbers.forEach(function(number) {
        container.innerHTML += '<div class="card-body" style="background-color:'+ number.color +';border-left: 20px solid '+ number.color +';">' + number.id + '</div>';
    });
}

function onShuffle(){
    container.innerHTML = "";
    numbers.sort(()=> 0.5 - Math.random());
    numbers.forEach(function(number) {
        container.innerHTML += '<div class="card-body" style="background-color:'+ number.color +';border-left: 20px solid '+ number.color +';">' + number.id + '</div>';
    });
}

function onSort(){
    container.innerHTML = "";
    numbers.sort((num1,num2)=> num1.id - num2.id);
    numbers.forEach(function(number) {
        container.innerHTML += '<div class="card-body" style="background-color:'+ number.color +';border-left: 20px solid '+ number.color +';">' + number.id + '</div>';
    });
}