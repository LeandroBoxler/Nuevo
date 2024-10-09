const emailLabel = document.querySelector(".footer--Email");
const formEmail = document.querySelector(".footer--form")

formEmail.addEventListener("click",function(){
    formEmail.style.outline = 'none'
    formEmail.style.borderBottom = '3px solid red'
})
formEmail.addEventListener("blur",function(){
    formEmail.style.outline = 'none'
    formEmail.style.borderBottom = '1px solid white'
})


