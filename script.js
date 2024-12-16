document.addEventListener('DOMContentLoaded', () => {
    // Home page animation
    const couplePhoto = document.getElementById('couple-photo');
    if (couplePhoto) {
        couplePhoto.style.opacity = '0';
        setTimeout(() => {
            couplePhoto.style.transition = 'opacity 1s ease-in-out';
            couplePhoto.style.opacity = '1';
        }, 500);
    }

    // Love Notes navigation
    const notes = document.querySelectorAll('.note');
    const prevButton = document.getElementById('prevNote');
    const nextButton = document.getElementById('nextNote');
    
    if (notes.length && prevButton && nextButton) {
        let currentNote = 0;
        
        function showNote(index) {
            notes.forEach((note, i) => {
                if (i === index) {
                    note.style.display = 'block';
                } else {
                    note.style.display = 'none';
                }
            });
        }
        
        showNote(currentNote);
        
        prevButton.addEventListener('click', () => {
            currentNote = (currentNote - 1 + notes.length) % notes.length;
            showNote(currentNote);
        });
        
        nextButton.addEventListener('click', () => {
            currentNote = (currentNote + 1) % notes.length;
            showNote(currentNote);
        });
    }

    // Gallery image modal
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.querySelector('img').src;
            const imgAlt = item.querySelector('img').alt;
            const modal = document.createElement('div');
            modal.classList.add('modal');
            modal.innerHTML = `
                <div class="modal-content">
                    <img src="${imgSrc}" alt="${imgAlt}">
                    <span class="close">&times;</span>
                </div>
            `;
            document.body.appendChild(modal);
            
            modal.querySelector('.close').addEventListener('click', () => {
                modal.remove();
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add heart animation to the home page
    const addHeartAnimation = () => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.innerText = '💕';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    };

    if (document.querySelector('.hero')) {
        setInterval(addHeartAnimation, 300);
    }
});