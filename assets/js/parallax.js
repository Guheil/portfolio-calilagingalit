// Parallax background effect
window.addEventListener('scroll', () => {
    const parallax1 = document.getElementById('parallax1');
    const parallax2 = document.getElementById('parallax2');
    const parallax3 = document.getElementById('parallax3');

    [parallax1, parallax2, parallax3].forEach(parallax => {
        if (parallax) {
            const rect = parallax.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const yPos = -(rect.top * 0.5);
                parallax.style.backgroundPosition = `center ${yPos}px`;
            }
        }
    });
});
