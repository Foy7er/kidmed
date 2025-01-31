document.querySelector('.dropdown-toggle').addEventListener('click', function () {
    const dropdownMenu = this.nextElementSibling;
    dropdownMenu.style.display =
        dropdownMenu.style.display === 'block' ? 'none' : 'block';
});
const dropDown = document.querySelector('.dropdown-menu');
const mainContent = document.querySelector('.header');
const hiddenChat = document.getElementById('hidden-chat');
const chatLink = document.getElementById('nav__link--chat');
const hidden = document.querySelector('.container');
const navLink = document.querySelectorAll('.nav__link-bg-active');
const homeBtn = document.querySelector('.homeBtn');
const hiddenWrap = document.querySelector('.hidden');
const hiddenProfile = document.querySelector('.hidden-profile');
const profileLink = document.querySelector('.nav__link--profile');
const changeProfile = document.querySelector('.change__profile');



homeBtn.addEventListener('click', function () {
    hiddenWrap.style.display = 'none';
    hidden.style.display = 'flex';
});

chatLink.addEventListener('click', function () {
    hidden.style.display = 'none';
    hiddenWrap.style.display = 'block';
    hiddenChat.style.display = 'block';
});

profileLink.addEventListener('click', function () {
    if (hiddenProfile) {

        hidden.style.display = 'none';
        hiddenChat.style.display = 'none';
        hiddenProfile.style.display = 'block';
    } else {
        hiddenProfile.style.display = 'none';
    }
});




document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Отменяем стандартное поведение ссылки (перезагрузка страницы)

        // Получаем целевой элемент из атрибута data-target
        const target = this.getAttribute('data-target');

        // Скрываем все блоки контента
        document.querySelectorAll('.content').forEach(content => {
            content.classList.add('hidden');
        });

        // Показываем блок с нужным id
        document.getElementById(target).classList.remove('hidden');
    });
});




navLink.forEach(button => {
    button.addEventListener('click', function () {
        // Удаляем класс 'active' у всех кнопок
        navLink.forEach(btn => btn.classList.remove('active'));

        // Добавляем класс 'active' на кнопку, по которой кликнули
        this.classList.add('active');
    });
});

function moveBlock() {
    var chatsWrap = document.getElementById('chats__wrap');
    chatsWrap.style.left = '-200px';
    var rotateIcon = document.querySelector('.swpright__icon');
    rotateIcon.style.transform = 'rotate(180deg)';

}

var moved = false; // Переменная для отслеживания состояния перемещения

function moveBlock() {
    var chatsWrap = document.getElementById('chats__wrap');
    var rotateIcon = document.querySelector('.swpright__icon');

    if (moved) {
        // Если блок уже перемещен, возвращаем его на исходную позицию
        chatsWrap.style.left = '-400px'; // Возвращаем в исходное положение
        rotateIcon.style.transform = 'rotate(0deg)'; // Возвращаем иконку в исходное положение
    } else {
        // Если блок не перемещен, сдвигаем его влево на -200px
        chatsWrap.style.left = '-200px';
        rotateIcon.style.transform = 'rotate(180deg)'; // Поворачиваем иконку
    }

    // Переключаем состояние
    moved = !moved;
}

