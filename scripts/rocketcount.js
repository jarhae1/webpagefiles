var blastoffBtn = document.querySelector('.blastoff');
var output = document.querySelector('.output');


function createPara(i){
  var para = document.createElement('p');
  output.appendChild(para);
  para.textContent = i;
}



function blastoff(){
    var para = document.createElement('p');
    output.appendChild(para);
    para.textContent='Start Count Down:';
    // for(var x = 10; x>0; x--){
    //   if(x===1){
    //     createPara(x);
    //   }else{
    //     createPara(x);
    //   }
    // }
   var counter = 10;
  (function theLoop(i){
          setTimeout(function(){
            createPara(counter);
            counter-=1;
            if(i>0){
              theLoop(i);
              console.log(i);
            }else{
              createPara('BLAST OFF');
              var audio = new Audio('../assets/rocket.mp3');
              audio.play();  
            }
          }, 500);
          --i;}
    )(counter);

}
        //createPara(x);



blastoffBtn.addEventListener('click',blastoff);
