document.addEventListener('DOMContentLoaded', function() {
    // Loading screen
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 1500);

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealHandler = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (elementTop < windowHeight * 0.75) {
                element.classList.add('revealed');
            }
        });
    };
    window.addEventListener('scroll', revealHandler);
    revealHandler();

    // File upload functionality
    const fileInputs = document.querySelectorAll('.file-input');
    fileInputs.forEach(input => {
        input.addEventListener('change', function(e) {
            const fileList = this.closest('.file-upload').querySelector('.file-list');
            fileList.innerHTML = '';
            for (let i = 0; i < this.files.length; i++) {
                const file = this.files[i];
                const fileItem = document.createElement('div');
                fileItem.textContent = file.name;
                fileList.appendChild(fileItem);
            }
        });
    });
});
