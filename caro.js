const track = document.querySelector('.slider-track');
        const cards = document.querySelectorAll('.testimonial-card');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        let currentIndex = 0;
        let cardWidth = cards[0].offsetWidth + 32;
        
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });

        function updateSlider() {
            track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        }

        function slideNext() {
            currentIndex++;
            track.style.transition = 'transform 0.5s ease-in-out';
            updateSlider();

            if (currentIndex >= cards.length) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    currentIndex = 0;
                    updateSlider();
                }, 500);
            }
        }

        function slidePrev() {
            if (currentIndex <= 0) {
                track.style.transition = 'none';
                currentIndex = cards.length;
                updateSlider();
                setTimeout(() => {
                    track.style.transition = 'transform 0.5s ease-in-out';
                    currentIndex--;
                    updateSlider();
                }, 50);
            } else {
                currentIndex--;
                updateSlider();
            }
        }

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'none';
            });
        });

        nextBtn.addEventListener('click', slideNext);
        prevBtn.addEventListener('click', slidePrev);

        window.addEventListener('resize', () => {
            cardWidth = cards[0].offsetWidth + 32;
            updateSlider();
        });

        setInterval(slideNext, 5000);