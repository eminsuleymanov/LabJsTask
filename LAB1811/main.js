function Bar(){
    
    var x = document.querySelector('#sidebar-wrapper');
    if (x.classList.contains('d-none')) {
        x.classList.remove('d-none');
       
    } 
    else {
        x.classList.add('d-none');

        
    }

      
    
}
var count = 16; 

function Increase(){
    count++;
    var texts = document.querySelectorAll('.container-fluid p');
    for(var p of texts){
        p.style.fontSize = count+"px";
        
    }
    
}
function Decrease(){
    count--;
    var texts = document.querySelectorAll('.container-fluid p');
    for(var p of texts){
        p.style.fontSize = count+"px";
        
    }
    
}
function ChangeColor(){
    var inp = document.getElementById('inp').value;
    var color = document.querySelector('.container-fluid h1')
    color.style.color = inp;
}