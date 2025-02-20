// Задание 1

// 	Сверстайте кнопку, которая будет содержать в себе icon_01 (как в примере в последнем видео). При клике на кнопку
// 	иконка должна меняться на icon_02. Повторный клик меняет иконку обратно

const btn = document.getElementById('j-btn');
const svg = btn.querySelector('.icon-01');

document.addEventListener('click', () => {
	svg.classList.toggle('icon-02');
})