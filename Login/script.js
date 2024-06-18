const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const errorMsg = document.getElementById('error-msg');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === '' || password === '') {
        errorMsg.textContent = 'Please fill in all fields';
        return;
    }

    // TO DO: implement login logic here
    // For demo purposes, we'll just alert the credentials
    alert(`Email: ${email}, Password: ${password}`);
});
const toggleThemeButton = document.getElementById('toggle-theme');

toggleThemeButton.addEventListener('click', () => {
	document.body.classList.toggle('dark-mode');
});