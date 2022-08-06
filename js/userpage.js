function init() {
    const btnEl = document.querySelector('.btn');
    const shareEl = document.querySelector('.share');
    function toggleOptions() {
        const wrapperEl = shareEl.querySelector('.wrapper');
        const iconEl = btnEl.querySelector('i');

        wrapperEl.classList.toggle('active');

        if (iconEl.classList.contains('ri-share-line')) {
            iconEl.classList.replace('ri-share-line', 'ri-close-line');
        } else {
            iconEl.classList.replace('ri-close-line', 'ri-share-line');
        }
    };

    btnEl.addEventListener('click', toggleOptions);
}