let cards=[]
let sum=0
let message=document.querySelector("#message-el")
let suuum=document.querySelector("#e")
let caards=document.querySelector("#d")
function startgame(){
    if(sum > 21){
        message.textContent="You have lost the game"
    }else if(sum < 21){
        message.textContent="Do you want to draw a new card"
    }else if(sum===21){
        message.textContent="You have got the Blackjack"
    }
    card()
    sumtake()
}
function sumtake(){
    sum = cards[0]+cards[1]
    suuum.textContent="Sums:" + sum

}
function card(){
    let d=generate()
    let f=generate()
    cards.push(d)
    cards.push(f)
    caards.textContent="Cards: " + cards[0] + " " + cards[1]
    
}
function generate(){ 
    let c= Math.floor(Math.random()*13)+1
    if(c>=11){
        return 11
    }else if(c<11){
        return c
    }
}
