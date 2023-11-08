var menu = document.getElementById('menu')
var mobNavLinks = document.getElementById('mob-nav')

var right =mobNavLinks.style.right = '-200px'
menu.onclick = function(){
    if(mobNavLinks.style.right == right){
        mobNavLinks.style.right = '0px'
        menu.src = "./images/close.png"
    }
    else{
        mobNavLinks.style.right = '-200px'
        menu.src = "./images/menu.png"
    }
}