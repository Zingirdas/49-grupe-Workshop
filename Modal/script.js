const btn = document.querySelector("button"),
    modalContent = document.querySelector(".modalContent"),
    close = document.querySelector(".close"),
    modal = document.querySelector(".modal");

btn.addEventListener("click", openModal)
close.addEventListener("click", closeModal)
modal.addEventListener("click", closeModal)


function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modalContent.classList.add("slide-up")

    setTimeout(() => {
        modalContent.classList.remove("slide-up")
        modal.style.display = "none"
    }, 500)
}