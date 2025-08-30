// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Get DOM elements
    const modal = document.getElementById('registrationModal');
    const closeBtn = document.querySelector('.close');
    const ctaButtons = document.querySelectorAll('.cta-button');
    const headerCta = document.querySelector('.header-cta');
    
    // Modal functionality
    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    
    // Event listeners for opening modal
    ctaButtons.forEach(button => {
        if (!button.classList.contains('header-cta')) { // Exclude header CTA
            button.addEventListener('click', openModal);
        }
    });
    
    // Header CTA scrolls to main CTA instead of opening modal
    headerCta.addEventListener('click', function() {
        const heroCta = document.querySelector('.hero-cta');
        heroCta.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Close modal when clicking the close button
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    // Form submission handling
    const registrationForm = document.querySelector('.registration-form');
    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(registrationForm);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });
        
        // Simulate form submission (replace with actual form handling)
        console.log('Form submitted:', formObject);
        
        // Show success message
        showSuccessMessage();
        
        // Close modal after successful submission
        setTimeout(closeModal, 2000);
    });
    
    // Success message function
    function showSuccessMessage() {
        const modalContent = document.querySelector('.modal-content');
        const form = document.querySelector('.registration-form');
        
        // Hide the form
        form.style.display = 'none';
        
        // Create success message with VIP upgrade option
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
                <h3 style="color: #059669; margin-bottom: 1rem;">Registration Successful!</h3>
                <p style="color: #6b7280; margin-bottom: 1rem;">Thank you for securing your FREE seat at the AI General Masterclass 2025!</p>
                <p style="color: #6b7280; margin-bottom: 2rem;">You will receive a confirmation email shortly with event details and login instructions.</p>
                
                <div style="margin-top: 2rem; padding: 1.5rem; background: #f0f9ff; border-radius: 10px; border: 2px solid #0ea5e9;">
                    <h4 style="color: #0c4a6e; margin-bottom: 1rem;">🚀 Want to Maximize Your Results?</h4>
                    <p style="color: #0369a1; margin-bottom: 1.5rem;">Upgrade to VIP and unlock exclusive bonuses worth $497+ for just $97!</p>
                    <button class="cta-button" style="background: #f59e0b; margin-right: 1rem;" onclick="window.location.href='vip-upgrade.html'">Upgrade To VIP</button>
                    <button class="secondary-btn" onclick="closeModal()">Continue with Free Ticket</button>
                </div>
            </div>
        `;
        
        modalContent.appendChild(successDiv);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add loading animation to elements
    function addLoadingAnimation() {
        const elements = document.querySelectorAll('.benefit-item, .testimonial-item, .authority-img, .hero-img');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        elements.forEach(el => {
            el.classList.add('loading');
            observer.observe(el);
        });
    }
    
    // Initialize loading animations
    addLoadingAnimation();
    
    // Sticky header scroll effect
    function handleStickyHeader() {
        const header = document.querySelector('.sticky-header');
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    }
    
    // Add scroll event listener for sticky header
    window.addEventListener('scroll', handleStickyHeader);
    
    // Countdown timer functionality (optional enhancement)
    function updateCountdown() {
        const eventDate = new Date('June 20, 2025 10:00:00 EST').getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            
            // You can add a countdown display element to show this
            console.log(`Event starts in: ${days}d ${hours}h ${minutes}m`);
        }
    }
    
    // Update countdown every minute
    setInterval(updateCountdown, 60000);
    updateCountdown(); // Initial call
    
    // Add hover effects for interactive elements
    function addHoverEffects() {
        const benefitItems = document.querySelectorAll('.benefit-item');
        const testimonialItems = document.querySelectorAll('.testimonial-item');
        
        benefitItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        testimonialItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.01)';
            });
            
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
    
    // Initialize hover effects
    addHoverEffects();
    
    // Form validation enhancement
    function enhanceFormValidation() {
        const inputs = document.querySelectorAll('.registration-form input, .registration-form select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
            
            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    clearError(this);
                }
            });
        });
    }
    
    function validateField(field) {
        const value = field.value.trim();
        
        if (field.hasAttribute('required') && !value) {
            showError(field, 'This field is required');
        } else if (field.type === 'email' && value && !isValidEmail(value)) {
            showError(field, 'Please enter a valid email address');
        } else if (field.type === 'tel' && value && !isValidPhone(value)) {
            showError(field, 'Please enter a valid phone number');
        }
    }
    
    function showError(field, message) {
        clearError(field);
        field.classList.add('error');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        errorDiv.style.color = '#dc2626';
        errorDiv.style.fontSize = '0.875rem';
        errorDiv.style.marginTop = '0.25rem';
        
        field.parentNode.appendChild(errorDiv);
    }
    
    function clearError(field) {
        field.classList.remove('error');
        const errorMessage = field.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isValidPhone(phone) {
        const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
        return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
    }
    
    // Initialize form validation
    enhanceFormValidation();
    
    // Console log for debugging
    console.log('AI General Masterclass 2025 - Landing Page Loaded Successfully!');
    console.log('All interactive features are now active.');
    
    // VIP Page specific functionality
    if (window.location.pathname.includes('vip-upgrade.html')) {
        console.log('VIP Upgrade Page Loaded');
        
        // Handle VIP upgrade form submission
        const vipOrderForm = document.querySelector('.vip-order-form form');
        if (vipOrderForm) {
            vipOrderForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form data
                const formData = new FormData(vipOrderForm);
                const formObject = {};
                formData.forEach((value, key) => {
                    formObject[key] = value;
                });
                
                // Simulate form submission (replace with actual payment processing)
                console.log('VIP Order submitted:', formObject);
                
                // Show success message
                showVIPSuccessMessage();
            });
        }
        
        // Handle secondary button clicks (decline VIP)
        const secondaryBtns = document.querySelectorAll('.secondary-btn');
        secondaryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Redirect to next page or show thank you message
                alert('Thank you for your interest! You will receive your free ticket confirmation shortly.');
                // You can redirect to a thank you page here
                // window.location.href = 'thank-you.html';
            });
        });
        
        // VIP success message function
        function showVIPSuccessMessage() {
            const form = document.querySelector('.vip-order-form form');
            const orderContent = document.querySelector('.order-form-content');
            
            // Hide the form
            form.style.display = 'none';
            
            // Create success message
            const successDiv = document.createElement('div');
            successDiv.className = 'vip-success-message';
            successDiv.innerHTML = `
                <div style="text-align: center; padding: 3rem;">
                    <div style="font-size: 5rem; margin-bottom: 1rem;">🎉</div>
                    <h2 style="color: #059669; margin-bottom: 1rem;">VIP Upgrade Successful!</h2>
                    <h3 style="color: #0c4a6e; margin-bottom: 1.5rem;">Welcome to the VIP Club!</h3>
                    <p style="color: #0369a1; margin-bottom: 1rem; font-size: 1.1rem;">Your VIP upgrade has been processed successfully. You now have access to:</p>
                    <ul style="text-align: left; max-width: 500px; margin: 0 auto 2rem; color: #0369a1;">
                        <li>✅ All Summit Session Recordings (Lifetime Access)</li>
                        <li>✅ VIP Implementation Workbook</li>
                        <li>✅ Special Deep Dive Session</li>
                        <li>✅ Early Access to Future Events</li>
                        <li>✅ VIP-Only Prize Drawings</li>
                    </ul>
                    <p style="color: #0369a1; margin-bottom: 2rem;">You will receive a confirmation email with all your VIP access details shortly.</p>
                    <button class="cta-button" onclick="window.location.href='index.html'">Return to Main Page</button>
                </div>
            `;
            
            orderContent.appendChild(successDiv);
        }
        
        // Add smooth scrolling for VIP page
        const vipUpgradeBtns = document.querySelectorAll('.vip-upgrade-btn, .vip-upgrade-btn-large');
        vipUpgradeBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const orderForm = document.querySelector('.vip-order-form');
                orderForm.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }
    
});
