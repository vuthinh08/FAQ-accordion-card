const detailContainers = document.querySelectorAll(".detail-container");
detailContainers.forEach((detail) => {
    const icon = detail.querySelector('.icon-down');
    if(icon) {
        detail.addEventListener('click', () => {
            icon.classList.toggle('rotate');
        })
    }
})

