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
            <div>
                <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
                <h3>Registration Successful!</h3>
                <p>Thank you for securing your FREE seat at the AI General Masterclass 2025!</p>
                <p>You will receive a confirmation email shortly with event details and login instructions.</p>
                
                <div class="vip-upgrade-card">
                    <h4>🚀 Want to Maximize Your Results?</h4>
                    <p>Upgrade to VIP and unlock exclusive bonuses worth $497+ for just $97!</p>
                    <div class="vip-buttons">
                        <button class="cta-button" onclick="window.location.href='vip-upgrade.html'">Upgrade To VIP</button>
                        <button class="secondary-btn" onclick="closeModal()">Continue with Free Ticket</button>
                    </div>
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
    
    // Countdown timer for thank you page
    function updateThankYouCountdown() {
        // Set the event date: June 20, 2025 at 10:00 AM EST
        // Using a more reliable date format
        const eventDate = new Date('2025-06-20T10:00:00-05:00').getTime();
        const now = new Date().getTime();
        const distance = eventDate - now;
        
        console.log('Countdown update:', {
            eventDate: new Date(eventDate),
            now: new Date(now),
            distance: distance,
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Update countdown elements if they exist
            const daysElement = document.getElementById('days');
            const hoursElement = document.getElementById('hours');
            const minutesElement = document.getElementById('minutes');
            const secondsElement = document.getElementById('seconds');
            
            console.log('Countdown elements found:', {
                days: daysElement,
                hours: hoursElement,
                minutes: minutesElement,
                seconds: secondsElement
            });
            
            if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
            if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
            if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
            if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
        } else {
            // Event has passed
            const countdownElements = document.querySelectorAll('.countdown-number');
            countdownElements.forEach(element => {
                element.textContent = '00';
            });
            
            // Update the countdown message
            const countdownMessage = document.querySelector('.countdown-card h2');
            if (countdownMessage) {
                countdownMessage.textContent = 'Event is Live Now!';
            }
        }
    }
    
    // Test countdown function for debugging
    function testCountdown() {
        console.log('Testing countdown functionality...');
        
        // Test with a simple countdown to 1 minute from now
        const testDate = new Date(Date.now() + 60000); // 1 minute from now
        const now = new Date().getTime();
        const distance = testDate.getTime() - now;
        
        if (distance > 0) {
            const minutes = Math.floor(distance / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            console.log('Test countdown:', { minutes, seconds });
            
            // Update test elements
            const minutesElement = document.getElementById('minutes');
            const secondsElement = document.getElementById('seconds');
            
            if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
            if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
        }
    }
    
    // Check if we're on the vip-upgrade page and initialize countdown
    if (document.querySelector('.countdown-section')) {
        console.log('Countdown section found, initializing...');
        
        // Check if countdown elements exist
        const countdownElements = document.querySelectorAll('.countdown-number');
        console.log('Found countdown elements:', countdownElements.length);
        
        // Update thank you countdown every second for real-time experience
        setInterval(updateThankYouCountdown, 1000);
        
        // Initial thank you countdown update
        updateThankYouCountdown();
        
        // Debug logging
        console.log('Countdown initialized for vip-upgrade page');
        console.log('Event date:', new Date('2025-06-20T10:00:00-05:00'));
        console.log('Current time:', new Date());
        
        // Test countdown with a closer date to verify functionality
        const testDate = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now
        console.log('Test countdown to:', testDate);
        
        // Run test countdown to verify functionality
        testCountdown();
    } else {
        console.log('Countdown section not found on this page');
    }
    
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
    
    // Ensure countdown is initialized after DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            if (document.querySelector('.countdown-section')) {
                console.log('DOM loaded, initializing countdown...');
                updateThankYouCountdown();
            }
        });
    }
    
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
