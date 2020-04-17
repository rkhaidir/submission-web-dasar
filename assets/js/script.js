document.addEventListener("DOMContentLoaded", function(){
    const menuToggle = document.querySelector(".menu-toggle")

    menuToggle.addEventListener("click", () => {
        const nav = document.querySelector(".nav")
        nav.classList.toggle('show')
    })


    const years = document.querySelector(".years")
    let getYears = new Date()
    years.innerHTML = getYears.getFullYear()
})