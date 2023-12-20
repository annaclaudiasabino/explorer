let darkMode = true;
const buttonToggle = document.getElementById('toggle-mode');

buttonToggle.addEventListener('click', (e) => {
    document.documentElement.classList.toggle('light')
    const mode = darkMode ? 'light' : 'dark';

    e.currentTarget.querySelector('span').textContent = `${mode} mode ativado! Clique aqui para desativar.`;

    darkMode = !darkMode;
})