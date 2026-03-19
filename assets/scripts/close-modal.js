const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.burger-menu');
const modal = document.querySelector('.popup-menu');

openBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    document.body.style.overflow = "hidden";
})

closeBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden');
    document.body.style.overflow = "auto";
})