function updateTime() {
	const timeElement = document.getElementById('time');
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, '0');
	const minutes = now.getMinutes().toString().padStart(2, '0');
	const seconds = now.getSeconds().toString().padStart(2, '0');
	timeElement.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function toggleTheme() {
	const body = document.body;
	body.classList.toggle('dark-mode');
}

setInterval(updateTime, 1000);

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', toggleTheme);
