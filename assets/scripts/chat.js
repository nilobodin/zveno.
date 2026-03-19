document.addEventListener('DOMContentLoaded', function () {
    const chatButtons = document.querySelectorAll('.event-btn-small');
    const chatPanel = document.querySelector('.chat-panel');
    const chatCloseBtn = document.querySelector('.chat-close');

    const overlay = document.createElement('div');
    overlay.className = 'chat-overlay';
    document.body.appendChild(overlay);

    function openChat() {
        chatPanel.classList.remove('hidden');
        overlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    }

    function closeChat() {
        chatPanel.classList.add('hidden');
        overlay.classList.remove('visible');
        document.body.style.overflow = '';
    }

    chatButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            openChat();
        });
    });

    if (chatCloseBtn) {
        chatCloseBtn.addEventListener('click', closeChat);
    }

    overlay.addEventListener('click', closeChat);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !chatPanel.classList.contains('hidden')) {
            closeChat();
        }
    });
});