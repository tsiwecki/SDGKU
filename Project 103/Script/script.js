var c1Points=100;
var c1AttackPoints=10;
const x=document.getElementById("c1");

var c2Points=100;
var c2AttackPoints=10;
const y=document.getElementById("c2");


function c1attack(){
    var c1NewPoints = c1Points-c1AttackPoints;     
    if(c1NewPoints<=0){
        x.innerHTML="Game Over";
        document.getElementById("at-c1").style.display="none";
        document.getElementById("c1reset-btn").style.display="block";       
    }else{
        c1Points=c1NewPoints;
        display();
    }      
}

function c2attack(){
    var c2NewPoints = c2Points-c2AttackPoints;    
    if(c2NewPoints<=0){
        y.innerHTML="Game Over";
        document.getElementById("at-c2").style.display="none";
        document.getElementById("c2reset-btn").style.display="block";       
    }else{
        c2Points=c2NewPoints;
        display();
    }
}

function display(){
    x.innerHTML=`Points: ${c1Points}       Attack:${c1AttackPoints}`;
    y.innerHTML=`Points: ${c2Points}       Attack:${c2AttackPoints}`;
}

display();

function c1reset(){
    c1Points=100;
    document.getElementById("at-c1").style.display="block";
    display();   
}

function c2reset(){
    c2Points=100;
    document.getElementById("at-c2").style.display="block";
    display();   
}






