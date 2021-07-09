let question; {
  alert("Hiya!\nThanks for dropping by!");
  alert("Hope you are having a good day today!");
function askQuestion(){
  var answerfound = false;
  while(answerfound ==false){
      var answer = prompt("How many planets are there?");
      if(answer == "8"){
          alert("Nerd. ◕‿↼");
          answerfound = true;
      }
      else{
          alert("ʘ‿ʘ NOPE.");
      }
  
  }

} 
askQuestion();

var moon = prompt("Do you like moons?\nIf so how many do you want?");
for(let i = 0; i < moon; i++){
document.write("<img src ='https://i.imgur.com/MrSdk27.png?1'>");
console.log(i);
}
}