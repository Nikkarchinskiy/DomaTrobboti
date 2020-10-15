const modal = document.querySelector(".main-popup");
const buttonClose = document.querySelector(".button-close-popup");
document.querySelectorAll(".button-form").forEach(function(button){
    button.addEventListener("click", function() {
        modal.classList.add("main-popup__open");
        comsole.log ("hello");
    })

});
buttonClose.addEventListener("click", function() {
    modal.classList.remove("main-popup__open");
});

