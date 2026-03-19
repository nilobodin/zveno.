const closeBtn = document.querySelector('.close-btn');
const openBtn = document.querySelector('.burger-menu');
const modal = document.querySelector('.popup-menu');

function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = "auto";
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});