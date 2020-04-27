const email = document.getElementById('email-address');
const form = document.getElementsByTagName('form');

function checkForBlank() {
    event.preventDefault();
    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    if (pattern.test(email.value)) {
        return true;
    } else {
        email.className = 'redBorder';
        document.getElementById('error').removeAttribute('hidden');
    }
} 