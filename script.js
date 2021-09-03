const toggle_btn = document.querySelectorAll('.faq-toggle');
toggle_btn.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
});