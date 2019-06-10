const menuOpen = document.getElementsByClassName("top")[0];


menuOpen.addEventListener("click", function () {

    const openClosed = document.getElementsByClassName("all")[0];
    openClosed.classList.toggle("active");

})