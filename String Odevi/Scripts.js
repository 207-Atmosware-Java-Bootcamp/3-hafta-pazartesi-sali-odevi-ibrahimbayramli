//** Kullanicidan veri alma
var word=prompt("Bir kelime girin")

var result=""

function wordErase(){
   
    for(var i=1;i<=word.length;i++){
        if(i===1 || i===word.length){
            result+=word.substring(i-1,i)
            result+=" "
        }
        else{
            result+=" * "
        }
    }
    document.write("<br>"+result)
    }

wordErase()

