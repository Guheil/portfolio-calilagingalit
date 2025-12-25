// Portfolio Modal Functionality
const modal = document.getElementById('portfolioModal');
const modalImage = document.getElementById('modalImage');
const modalCategory = modal.querySelector('.modal-category');
const modalTitle = modal.querySelector('.modal-title');
const modalDescription = modal.querySelector('.modal-description');
const modalClose = modal.querySelector('.modal-close');
const modalOverlay = modal.querySelector('.modal-overlay');

// Get all portfolio items
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Open modal when clicking portfolio item
portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const category = item.querySelector('.portfolio-category');
        const title = item.querySelector('h3');
        const description = item.querySelector('.portfolio-info p');

        modalImage.src = img.src;
        modalImage.alt = img.alt;
        modalCategory.textContent = category ? category.textContent : '';
        modalTitle.textContent = title ? title.textContent : '';
        modalDescription.textContent = description ? description.textContent : '';

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// Keyboard navigation for images
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    const items = Array.from(portfolioItems);
    const currentSrc = modalImage.src;
    let currentIndex = items.findIndex(item => item.querySelector('img').src === currentSrc);

    if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % items.length;
        openModalWithItem(items[currentIndex]);
    } else if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        openModalWithItem(items[currentIndex]);
    }
});

function openModalWithItem(item) {
    const img = item.querySelector('img');
    const category = item.querySelector('.portfolio-category');
    const title = item.querySelector('h3');
    const description = item.querySelector('.portfolio-info p');

    modalImage.src = img.src;
    modalImage.alt = img.alt;
    modalCategory.textContent = category ? category.textContent : '';
    modalTitle.textContent = title ? title.textContent : '';
    modalDescription.textContent = description ? description.textContent : '';
}
