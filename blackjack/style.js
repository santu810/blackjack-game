let arr=[]
let sum=0
let isAlive=false
let hasBlackJack = false
 let message=""
let messageel=document.getElementById("san")
let sumel=document.getElementById("sum")
let card=document.getElementById("pan")

function getrandomnumber(){
    let ran=Math.floor(Math.random()*13)+1
    return ran
}
function startgame(){
      isAlive = true
    let first=getrandomnumber()
    let second=getrandomnumber()
     arr=[first,second]
    sum=first+second
    rendergame()
}
function rendergame() {
    card.textContent="Cards:"
    for(let i=0;i<arr.length;i++){
        card.textContent+=arr[i]+" "
    }
    sumel.textContent="Sum:"+sum
    if(sum<21){
    message="Take one more card"
    }else if(sum===21){
    message="you are a winner "
    hasBlackJack=true
    }else{
    message="you are out"
    isAlive=false

    }
     messageel.textContent=message
}




function newcard(){
    if(isAlive===true &&  hasBlackJack===false){
      let extra=getrandomnumber()
      sum+=extra
      arr.push(extra)
      rendergame()
    }
}