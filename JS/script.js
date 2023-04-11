// SCROOLL LOGIC 
let header = document.querySelector(".head")
window.addEventListener("scroll" , () => {
    header.classList.toggle("active", window.scrollY > 0)
})

// NAV BAR TOGGLER
let bntBars = document.querySelector(".fa-bars")
let navbar = document.querySelector(".nav")
let navItems = document.querySelectorAll(".nav li a ")

bntBars.addEventListener("click" , () => {
    navbar.classList.toggle("active")
})
navItems.forEach(item => {
    item.addEventListener("click" , ()=> {
    navbar.classList.remove("active")
        
    })
});