// selecting Navbar
var sideanav = document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")

menuicon.addEventListener("click",function(){
    sideanav.style.right=0
})

var closenav=document.getElementById("close-nav")

closenav.addEventListener("click",function(){
    sideanav.style.right="-50%"
})