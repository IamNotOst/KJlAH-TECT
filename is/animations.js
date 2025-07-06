// Дополнительные анимации
document.addEventListener('DOMContentLoaded', function() {
    // Анимация логотипа при загрузке
    const logo = document.querySelector('.clan-logo img');
    if (logo) {
        logo.style.transform = 'scale(0)';
        setTimeout(() => {
            logo.style.transition = 'transform 0.5s ease-out';
            logo.style.transform = 'scale(1) rotate(360deg)';
        }, 100);
    }
    
    // Анимация наведения на карточки участников
    const memberCards = document.querySelectorAll('.member-card, .alliance-card');
    memberCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Анимация фона шапки
    const header = document.querySelector('header');
    if (header) {
        let pos = 0;
        setInterval(() => {
            pos = (pos + 0.2) % 100;
            header.style.backgroundPosition = `${pos}% ${pos}%`;
        }, 50);
    }
});