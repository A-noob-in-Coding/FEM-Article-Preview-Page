let share = document.getElementById("main__share-active")
let button = document.getElementById("share__button")
console.log(share)
console.log(button)
share.classList.toggle("invis")

button.addEventListener("click",()=>{
    share.classList.toggle("invis")
})
