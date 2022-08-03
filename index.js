let c,b,sum
let card1=document.querySelector("#d")
function f(){
    b=generate()
    c=generate()
    card
    1.textContent="Cards: "+c+ " "+b
    g();
}
let sum1=document.querySelector("#e")
function g(){
    sum=c+b
    sum1.textContent="Sum: "+sum;
}
let message=document.querySelector("#message-el")
function a()
{
    message.textContent="Hello World"
    f();
}
function generate(){
    let Num=Math.floor(Math.random()*13)+1
    return Num;
}