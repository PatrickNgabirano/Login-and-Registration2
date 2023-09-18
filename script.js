const wrapper = document.querySelector('.wrapper'); // Add a dot before 'wrapper' to select by class
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerLink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => { // Use 'loginLink' instead of 'registerLink' here
    wrapper.classList.remove('active');
}
