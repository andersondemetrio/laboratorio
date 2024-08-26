document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        localStorage.setItem('loggedInUser', username);
        window.location.href = 'index.html';
    } else {
        document.getElementById('error').textContent = 'Usuário ou senha incorretos!';
    }
});