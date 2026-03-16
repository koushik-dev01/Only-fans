 // Animated Mobile Menu Logic
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileBtn.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileBtn.classList.remove('active');
            });
        });

        // 3-Card Center Animation Slider Logic
        const track = document.getElementById('testimonialTrack');
        const slides = document.querySelectorAll('.slider-item');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const dotsContainer = document.getElementById('dotsContainer');
        
        let currentIndex = 0;
        let autoSlideInterval;

        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if(i === 0) dot.classList.add('active');
            dotsContainer.appendChild(dot);
            
            dot.addEventListener('click', () => {
                goToSlide(i);
                resetAutoSlide();
            });
            
            slides[i].addEventListener('click', () => {
                goToSlide(i);
                resetAutoSlide();
            });
        });

        const dots = document.querySelectorAll('.dot');

        function updateSliderPosition() {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));
            
            slides[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
            
            const slideWidth = slides[0].offsetWidth;
            const containerWidth = track.parentElement.offsetWidth;
            const offset = (containerWidth - slideWidth) / 2;
            const tx = -(currentIndex * slideWidth) + offset;
            
            track.style.transform = `translateX(${tx}px)`;
        }

        function goToSlide(index) {
            if (index < 0) {
                currentIndex = slides.length - 1;
            } else if (index >= slides.length) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }
            updateSliderPosition();
        }

        prevBtn.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
            resetAutoSlide();
        });

        nextBtn.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
            resetAutoSlide();
        });

        function startAutoSlide() {
            autoSlideInterval = setInterval(() => {
                goToSlide(currentIndex + 1);
            }, 5000);
        }

        function resetAutoSlide() {
            clearInterval(autoSlideInterval);
            startAutoSlide();
        }

        window.addEventListener('resize', updateSliderPosition);
        setTimeout(updateSliderPosition, 100);
        startAutoSlide();

        // FAQ Accordion Logic
        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                faqItems.forEach(i => i.classList.remove('active'));
                
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });