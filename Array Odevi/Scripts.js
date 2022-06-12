//** Kullanicidan dizi uzunlugunun alinmasi
var len=prompt("Dizi uzunlugunu giriniz: ")

var oddSum=0
var evenSum=0
var sum=0
var myArr=[]
var myRnd
var myNewArr=[]


function myArrFunction(){
    for(var i=0;i<len;i++){
        myRnd=Math.floor(Math.random()*9+1)
        myArr[i]=myRnd

        if(myRnd%2==0) evenSum+=myRnd
        else oddSum+=myRnd

        sum+=myRnd

        myNewArr.push(i+1)

    }
}
function screenPrint(){
    document.write("<br><br>"+"Ilk Dizi: "+myArr)
    document.write("<br><br>"+"Dizinin Ilk Elemani: "+myArr[0])
    document.write("<br><br>"+"Dizinin Son Elemani: "+myArr[len-1])
    document.write("<br><br>"+"Dizinin Toplami: "+sum)
    document.write("<br><br>"+"Dizinin Cift Sayilari Toplami: "+evenSum)
    document.write("<br><br>"+"Dizinin Tek Sayilari Toplami: "+oddSum)
    document.write("<br><br>"+"Kucukten Buyuge Siralama: "+myArr.sort())
    document.write("<br><br>"+"Buyukten Kucuge Siralama: "+myArr.sort().reverse())
    document.write("<br><br>"+"Diziye \"+1\" Eklenmis Hali: "+myNewArr)
    
}

myArrFunction()
screenPrint()
