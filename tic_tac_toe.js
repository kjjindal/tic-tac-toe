var buttons=document.getElementsByTagName('button');
var tables=document.getElementsByTagName('table');
var maindiv=document.getElementsByClassName('main');
var userdiv=document.getElementsByClassName('user');
var resultdiv=document.getElementsByClassName('result');
var startbutton=document.getElementsByTagName('p');
var input1=document.getElementById("input1");
var input2=document.getElementById("input2");



startbutton[0].addEventListener('click',()=>{
    maindiv[0].style.display="grid";
    userdiv[0].style.display="none";
    resultdiv[0].innerHTML=`<h1><center>${input1.value.toUpperCase()} ("X") Vs ${input2.value.toUpperCase()} ("O") </center> </h1>`;
})










// we create a line for cross the winner pattern 

function draw(x1,y1,x2,y2){

    var canvas=document.querySelector('#canvas');
    if(!canvas.getContext){
        return ;
    }
    else {
           // nothing 
    }

    const ctx=canvas.getContext('2d');

    // set line stroke and width
    ctx.strokeStyle="green";
    ctx.lineWidth=5;

    // set or draw a line using x and y 
    ctx.beginPath();
    ctx.moveTo(x1,y1);   // starting point of line
    ctx.lineTo(x2,y2);  // ending point of line 
    ctx.stroke();

    // so change the x,y we can easily change the line positions

    //here we declare result because in draw function it is clear that anyone is winner

    if(count%2==0){
        resultdiv[0].innerHTML=`<h1><center> Winner is ${input1.value.toUpperCase()}  </center> </h1>`;

    }
    else{
        resultdiv[0].innerHTML=`<h1><center> Winner is ${input2.value.toUpperCase()}  </center> </h1>`;
    }



}




// draw();

//function which gives one by  one "X" and "O"
count=1;
function playervalue(c){

    if(c%2!==0){
        return "X"
    }
    else{
        return "O"
    }

}


// now we create a function which define anyone is winner or not  if winner then draw a line and declare a winner


//so we have to draw line according pattern so we have pass argument as x1,y1,x2,y2
function check(){

    // for 012
    if(buttons[0].innerText!="" && buttons[0].innerText==buttons[1].innerText && buttons[1].innerText==buttons[2].innerText){
        tables[0].style.zIndex="10";
        draw(0,100,600,100);
        return true
    }

    //for 036
    else if(buttons[0].innerText!="" && buttons[0].innerText==buttons[3].innerText && buttons[3].innerText==buttons[6].innerText){
        tables[0].style.zIndex="10";
        draw(100,0,100,600);
        return true
    }

    // for 048
    else if(buttons[0].innerText!="" && buttons[0].innerText==buttons[4].innerText && buttons[4].innerText==buttons[8].innerText){
        tables[0].style.zIndex="10";
        draw(0,0,600,600);
        return true
    }

    //for 147
    else if(buttons[1].innerText!="" && buttons[1].innerText==buttons[4].innerText && buttons[4].innerText==buttons[7].innerText){
        tables[0].style.zIndex="10";
        draw(300,0,300,600);
        return true
    }

    //for 258

    else if(buttons[2].innerText!="" && buttons[2].innerText==buttons[5].innerText && buttons[5].innerText==buttons[8].innerText){
        tables[0].style.zIndex="10";
        draw(500,0,500,600);
        return true
    }
    //for 678
    else if(buttons[6].innerText!="" && buttons[6].innerText==buttons[7].innerText && buttons[7].innerText==buttons[8].innerText){
        tables[0].style.zIndex="10";
        draw(0,500,600,500);
        return true
    }
    // for 246
    else if(buttons[2].innerText!="" && buttons[2].innerText==buttons[4].innerText && buttons[4].innerText==buttons[6].innerText){
        tables[0].style.zIndex="10";
        draw(600,0,0,600);
        return true
    }
    //for 345
    else if(buttons[3].innerText!="" && buttons[3].innerText==buttons[4].innerText && buttons[4].innerText==buttons[5].innerText){
        tables[0].style.zIndex="10";
        draw(0,300,600,300);
        return true;
    }

    else {
        return false;
    }



 

 
 


}







// code for when user press button then automatically print "X" or "O"

for(item of buttons){
    item.addEventListener('click',(e)=>{

        if(e.target.innerText==""){
            e.target.innerText=playervalue(count);
            count+=1;
        }

        var checks=check();

        // this code for if match is tie
        if(!checks){
            if(count==10){
                resultdiv[0].innerHTML=`<h1><center> Match is tie between  ${input1.value.toUpperCase()} and  ${input2.value.toUpperCase()}  </center> </h1>`;
            }
        }
        
    })
}







