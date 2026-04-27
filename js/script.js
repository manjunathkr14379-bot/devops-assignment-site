document.addEventListener('DOMContentLoaded', () => {
    // Add simple animation to features on load
    const features = document.querySelectorAll('.feature');
    features.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = `all 0.5s ease ${index * 0.2}s`;
        
        setTimeout(() => {
            feature.style.opacity = '1';
            feature.style.transform = 'translateY(0)';
        }, 100);
    });

    // Handle Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission for demo purposes
            
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            const statusMsg = document.getElementById('formStatus');
            
            // Simulate sending
            btn.textContent = 'Sending...';
            btn.disabled = true;
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.disabled = false;
                
                // Show success message
                statusMsg.textContent = 'Message sent successfully! (Simulated)';
                statusMsg.className = 'status-msg success';
                
                contactForm.reset();
                
                // Clear message after 3 seconds
                setTimeout(() => {
                    statusMsg.textContent = '';
                }, 3000);
            }, 1500);
        });
    }
});
