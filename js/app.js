let slime1 = document.getElementById("slime1")
let slime2 = document.getElementById("slime2")
let slime3 = document.getElementById("slime3")

window.onscroll = function (scroll) {
    slime1.style.height = 10 + window.scrollY / 40 + "vmin"
    slime2.style.height = 20 + window.scrollY / 50 + "vmin"
    slime3.style.height = 15 + window.scrollY / 60 + "vmin"
}
