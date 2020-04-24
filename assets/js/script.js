document.addEventListener("DOMContentLoaded", function(){
    const menuToggle = document.querySelector(".menu-toggle")

    menuToggle.addEventListener("click", () => {
        const nav = document.querySelector(".nav")
        nav.classList.toggle('show')
    })

    const backTop = document.querySelector(".back-top")

    window.addEventListener("scroll", scrollUp)

    function scrollUp() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backTop.style.display = ""
        } else {
            backTop.style.display = "none"
        }
    }

    backTop.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
})