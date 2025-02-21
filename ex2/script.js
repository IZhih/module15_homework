// Заданиие 2
// Сверстайте кнопку, клик на которую будет выводить данные о размерах экрана с помощью alert.

const btn = document.getElementById('j-btn');
const svg = btn.querySelector('.icon-01');

btn.addEventListener('click', () => {
	alert('Размер экрана ' + window.screen.width + 'px по горизонтали, ' + window.screen.height + 'px по вертикали');
})