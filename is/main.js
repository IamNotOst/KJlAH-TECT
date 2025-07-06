// Конфигурация данных
const config = {
    clanName: "Shadow Legends",
    clanMotto: "Победа или смерть",
    leader: {
        name: "ShadowMaster",
        avatar: "images/leader-avatar.jpg",
        rank: "Глава клана"
    },
    elders: [
        { name: "Elder1", avatar: "images/elder1.jpg", rank: "Старейшина" },
        { name: "Elder2", avatar: "images/elder2.jpg", rank: "Старейшина" },
        { name: "Elder3", avatar: "images/elder3.jpg", rank: "Старейшина" },
        { name: "Elder4", avatar: "images/elder4.jpg", rank: "Старейшина" },
        { name: "Elder5", avatar: "images/elder5.jpg", rank: "Старейшина" }
    ],
    members: [
        { name: "Member1", avatar: "images/member1.jpg", rank: "Участник" },
        { name: "Member2", avatar: "images/member2.jpg", rank: "Участник" },
        // ... остальные участники
    ],
    alliances: [
        { name: "Night Wolves", logo: "images/alliance1.png", description: "Стратегическое партнерство" },
        { name: "Dragon Force", logo: "images/alliance2.png", description: "Торговый альянс" },
        { name: "Phoenix Clan", logo: "images/alliance3.png", description: "Военный союз" }
    ]
};

// Инициализация страницы
document.addEventListener('DOMContentLoaded', function() {
    // Загрузка данных участников
    loadLeaderData();
    loadEldersData();
    loadMembersData();
    loadAlliancesData();
    
    // Инициализация анимаций при прокрутке
    initScrollAnimations();
    
    // Загрузка переводов
    loadTranslations('ru');
});

// Загрузка данных лидера
function loadLeaderData() {
    const leaderCard = document.querySelector('.leader-card');
    if (!leaderCard) return;
    
    leaderCard.querySelector('.member-name').textContent = config.leader.name;
    leaderCard.querySelector('.member-rank').textContent = config.leader.rank;
    leaderCard.querySelector('.member-avatar img').src = config.leader.avatar;
    leaderCard.querySelector('.member-avatar img').alt = config.leader.name;
}

// Загрузка данных старейшин
function loadEldersData() {
    const eldersGrid = document.querySelector('.elders-grid');
    if (!eldersGrid) return;
    
    eldersGrid.innerHTML = '';
    
    config.elders.forEach(elder => {
        const elderCard = createMemberCard(elder);
        eldersGrid.appendChild(elderCard);
    });
    
    // Активируем анимацию после загрузки
    setTimeout(() => {
        eldersGrid.classList.add('animated');
    }, 100);
}

// Загрузка данных участников
function loadMembersData() {
    const membersGrid = document.querySelector('.members-grid');
    if (!membersGrid) return;
    
    membersGrid.innerHTML = '';
    
    config.members.forEach(member => {
        const memberCard = createMemberCard(member);
        membersGrid.appendChild(memberCard);
    });
    
    // Активируем анимацию после загрузки
    setTimeout(() => {
        membersGrid.classList.add('animated');
    }, 100);
}

// Создание карточки участника
function createMemberCard(memberData) {
    const card = document.createElement('div');
    card.className = 'member-card';
    
    card.innerHTML = `
        <div class="member-avatar">
            <img src="${memberData.avatar}" alt="${memberData.name}" loading="lazy">
        </div>
        <h3 class="member-name">${memberData.name}</h3>
        <p class="member-rank" data-translate="rank_member">${memberData.rank}</p>
    `;
    
    return card;
}

// Загрузка данных альянсов
function loadAlliancesData() {
    const alliancesGrid = document.querySelector('.alliances-grid');
    if (!alliancesGrid) return;
    
    alliancesGrid.innerHTML = '';
    
    config.alliances.forEach(alliance => {
        const allianceCard = document.createElement('div');
        allianceCard.className = 'alliance-card';
        
        allianceCard.innerHTML = `
            <img src="${alliance.logo}" alt="${alliance.name}" loading="lazy">
            <h3>${alliance.name}</h3>
            <p>${alliance.description}</p>
        `;
        
        alliancesGrid.appendChild(allianceCard);
    });
}

// Инициализация анимаций при прокрутке
function initScrollAnimations() {
    const animatedSections = document.querySelectorAll('.animated-section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    animatedSections.forEach(section => {
        observer.observe(section);
    });
}