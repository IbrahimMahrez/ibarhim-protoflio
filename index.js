
        // Typing Effect
        const typingText = document.getElementById('typing');
        const professions = ['Full Stack Developer 🚀', 'Software Engineer 💻', 'MEAN Stack Specialist 📊'];
        let professionIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isEnd = false;
        
        function type() {
            const currentProfession = professions[professionIndex];
            
            if (isDeleting) {
                // Delete characters
                typingText.textContent = currentProfession.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Add characters
                typingText.textContent = currentProfession.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentProfession.length) {
                // Wait at end of word
                isEnd = true;
                setTimeout(() => {
                    isDeleting = true;
                }, 2000);
            } else if (isDeleting && charIndex === 0) {
                // Move to next word
                isDeleting = false;
                professionIndex++;
                if (professionIndex === professions.length) professionIndex = 0;
            }
            
            const typingSpeed = isDeleting ? 50 : isEnd ? 100 : 150;
            setTimeout(type, typingSpeed);
            
            if (charIndex === currentProfession.length) {
                isEnd = false;
            }
        }
        
        // Start typing effect after page loads
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(type, 1000);
        });
        
        // Mobile menu toggle
        const menuToggle = document.querySelector('button[aria-label="menu"]');
        const navList = document.querySelector('nav ul');
        
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('hidden');
            navList.classList.toggle('flex');
            navList.classList.toggle('flex-col');
            navList.classList.toggle('absolute');
            navList.classList.toggle('top-16');
            navList.classList.toggle('right-6');
            navList.classList.toggle('bg-black');
            navList.classList.toggle('p-4');
            navList.classList.toggle('rounded-lg');
            navList.classList.toggle('shadow-lg');
            navList.classList.toggle('animate__fadeIn');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        
        // Animate sections on scroll using Intersection Observer
        const sections = document.querySelectorAll('section');
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            observer.observe(section);
        });
    