// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mockup generator (placeholder - in real implementation, this would process images)
document.getElementById('generate-mockup')?.addEventListener('click', function() {
    const wallPhoto = document.getElementById('wall-photo').files[0];
    const designOverlay = document.getElementById('design-overlay').files[0];
    const resultDiv = document.getElementById('mockup-result');
    
    if (wallPhoto && designOverlay) {
        resultDiv.innerHTML = '<p>Mockup generated! (In a real implementation, this would show the overlaid image)</p><img src="placeholder-mockup.jpg" alt="Mockup Preview" style="max-width: 100%;">';
    } else {
        resultDiv.innerHTML = '<p>Please upload both a wall photo and a design to generate a mockup.</p>';
    }
});

// Form submission (placeholder)
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});