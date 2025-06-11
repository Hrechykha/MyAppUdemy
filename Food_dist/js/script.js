window.addEventListener('DOMContentLoaded', () => {

    //Tabs

    let tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {

        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    };

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target === item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    })

    //Timer

    const deadline = '2025-07-13';

    function getTimeRemaining(endDate) {
        let now = new Date();
        const diffMs = new Date(endDate) - now;

        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24)),
            hours = Math.floor ((diffMs / (1000 * 60 * 60) % 24)),
            minutes = Math.floor(diffMs / (1000 * 60) % 60),
            seconds = Math.floor(diffMs / 1000 % 60);

        return {
            'total' : diffMs,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds,
        }
    }

    function setTimer(selector, endTime) {

        const timer = document.querySelector(selector),
            dayRemaining = timer.querySelector('#days'),
            hoursRemaining = timer.querySelector('#hours'),
            minutesRemaining = timer.querySelector('#minutes'),
            secondsRemaining = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateTimer, 1000);

        updateTimer();
        function updateTimer() {
            const t = getTimeRemaining(endTime);

            function format(unit) {
                return unit < 10 ? '0' + unit : unit;
            }

            dayRemaining.innerText = format(t.days);
            hoursRemaining.innerText = format(t.hours);
            minutesRemaining.innerText = format(t.minutes);
            secondsRemaining.innerText = format(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

    }

    setTimer('.timer', deadline);

    //Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        if (modal.classList.contains('show')) {
            clearInterval(modalTimerId);
        }
    }

    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }

    modalTrigger.forEach(btn => btn.addEventListener('click', openModal));

    const modalTimerId = setTimeout(openModal, 3000);

    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) { // target - модальное окно, а не modal диалог
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    })

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll); // удалится, когда пользователь один раз долистал до конца и увидел модалку
        }
    }

    window.addEventListener('scroll', showModalByScroll);
})