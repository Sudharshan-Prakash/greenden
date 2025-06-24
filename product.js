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

//product search
var productConatiner=document.getElementById("product-container")
var search=document.getElementById("search")
var productList=productConatiner.querySelectorAll("div")

search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()

    for(count=0;count<productList.length;count=count+1)
    {
        var productname= productList[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productList[count].style.display="none"
        }
        else
        {
            productList[count].style.display="block"
        }
    }
})