function toPop(){
    alert("You Clicked on External JS")
}
function toCount10(){
    let a = 0
    for(a=0;a<10;a++){
        document.getElementById("counting").innerHTML += a + ", "
    }
    document.getElementById("counting").innerHTML += 10
}