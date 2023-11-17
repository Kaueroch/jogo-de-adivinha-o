const resposta = Math.floor(Math.random() * 10 + 1);
let suposicções = 0;

document.getElementById("submitButton").onclick = function(){
   let numero =document.getElementById("guessField");
   suposicções+=1
 if(numero == resposta){
    alert('${resposta} é o numero certo')
 }
 else if(numero < resposta){
  alert("ESTÀ PROXIMO")
 }
 else{
    alert("ESTA LONGE AMIGAO")
 }
 if(GuessField == ""){
    alert("preencha por favor")
 }
}