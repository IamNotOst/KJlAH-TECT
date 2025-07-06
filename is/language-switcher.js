// Переводы для сайта
const translations = {
    ru: {
        clan_name: "Теневые Легенды",
        clan_motto: "Победа или смерть",
        nav_about: "О клане",
        nav_members: "Участники",
        nav_rules: "Правила",
        nav_alliances: "Альянсы",
        about_title: "О нашем клане",
        about_text1: "Мы - сплоченное сообщество игроков, стремящихся к совершенству.",
        about_text2: "Наш клан основан в 2020 году и с тех пор мы добились многого.",
        members_title: "Наши участники",
        elders_title: "Совет старейшин",
        rank_leader: "Глава клана",
        rank_elder: "Старейшина",
        rank_member: "Участник",
        rules_title: "Правила клана",
        rule1: "Уважение к другим участникам",
        rule2: "Активность не менее 3 раз в неделю",
        rule3: "Следование стратегии клана",
        rule4: "Запрет на оскорбления",
        rule5: "Участие в клановых мероприятиях",
        alliances_title: "Наши альянсы",
        copyright: "© 2023 Теневые Легенды. Все права защищены."
    },
    en: {
        clan_name: "Shadow Legends",
        clan_motto: "Victory or death",
        nav_about: "About",
        nav_members: "Members",
        nav_rules: "Rules",
        nav_alliances: "Alliances",
        about_title: "About our clan",
        about_text1: "We are a close-knit community of players striving for excellence.",
        about_text2: "Our clan was founded in 2020 and we have achieved a lot since then.",
        members_title: "Our members",
        elders_title: "Council of Elders",
        rank_leader: "Clan Leader",
        rank_elder: "Elder",
        rank_member: "Member",
        rules_title: "Clan Rules",
        rule1: "Respect for other members",
        rule2: "Activity at least 3 times a week",
        rule3: "Following clan strategy",
        rule4: "No insults allowed",
        rule5: "Participation in clan events",
        alliances_title: "Our alliances",
        copyright: "© 2023 Shadow Legends. All rights reserved."
    }
};

// Загрузка переводов
function loadTranslations(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Обновляем активную кнопку языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    
    // Сохраняем выбранный язык
    localStorage.setItem('preferredLanguage', lang);
    document.documentElement.lang = lang;
}

// Инициализация переключателя языка
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.dataset.lang;
        loadTranslations(lang);
        
        // Анимация переключения
        document.documentElement.style.opacity = 0;
        setTimeout(() => {
            document.documentElement.style.opacity = 1;
        }, 300);
    });
});

// Проверка сохраненного языка при загрузке
const preferredLanguage = localStorage.getItem('preferredLanguage') || 'ru';
loadTranslations(preferredLanguage);