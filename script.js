// 타이핑 효과 (Hero 섹션용)
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const originalText = typingElement.textContent;
    const typingTexts = ['UX/UI Designer'];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeWriter() {
        const currentText = typingTexts[currentIndex];
        
        if (!isDeleting) {
            // 타이핑 중
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                // 타이핑 완료, 잠시 대기 후 삭제 시작
                setTimeout(() => {
                    isDeleting = true;
                    typeWriter();
                }, 2000);
                return;
            }
        } else {
            // 삭제 중
            typingElement.textContent = currentText.substring(0, charIndex);
            charIndex--;
            
            if (charIndex < 0) {
                // 삭제 완료, 다음 텍스트로
                isDeleting = false;
                currentIndex = (currentIndex + 1) % typingTexts.length;
                charIndex = 0;
            }
        }
        
        // 타이핑 속도 조절
        const speed = isDeleting ? 50 : 100;
        setTimeout(typeWriter, speed);
    }
    
    // 3초 후 타이핑 효과 시작
    setTimeout(typeWriter, 3000);
}

// 부드러운 스크롤 기능 (헤더 높이 고려)
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20; // 20px 여유 공간
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Featured project cards: click card -> case study, button -> live site
function initFeaturedProjectCards() {
    const cards = document.querySelectorAll('.project-link--case[data-href]');
    if (!cards.length) return;

    const shouldIgnore = (target) => {
        return Boolean(target && target.closest && target.closest('.case-study-card__button--link'));
    };

    cards.forEach(card => {
        const href = card.getAttribute('data-href');
        if (!href) return;

        card.addEventListener('click', (e) => {
            if (shouldIgnore(e.target)) return;
            window.location.href = href;
        });

        card.addEventListener('keydown', (e) => {
            if (shouldIgnore(e.target)) return;
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.location.href = href;
            }
        });
    });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    initTypingEffect();
    initSmoothScroll();
    initFeaturedProjectCards();
});
