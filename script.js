document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Perform the login logic here
        console.log('Logging in:', username);
        // Redirect or show a success message
    } else {
        alert('Please fill in both fields');
    }
});
