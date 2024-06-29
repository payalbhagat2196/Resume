// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const authSection = document.getElementById('auth-section');
    const profileSection = document.getElementById('profile-section');
    const templateSection = document.getElementById('template-section');
    const resumeSection = document.getElementById('resume-section');
    const previewSection = document.getElementById('preview-section');

    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    loginBtn.addEventListener('click', () => {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    registerBtn.addEventListener('click', () => {
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert('Passwords do not match');
        } else {
            authSection.classList.add('hidden');
            profileSection.classList.remove('hidden');
        }
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        authSection.classList.add('hidden');
        profileSection.classList.remove('hidden');
    });

    document.getElementById('profile-form').addEventListener('submit', (event) => {
        event.preventDefault();
        profileSection.classList.add('hidden');
        templateSection.classList.remove('hidden');
    });

    document.querySelectorAll('.template-btn').forEach(button => {
        button.addEventListener('click', () => {
            templateSection.classList.add('hidden');
            resumeSection.classList.remove('hidden');
        });
    });

    document.getElementById('resume-form').addEventListener('submit', (event) => {
        event.preventDefault();
        const experience = document.getElementById('experience').value;
        document.getElementById('resume-preview').innerText = experience;
        resumeSection.classList.add('hidden');
        previewSection.classList.remove('hidden');
    });

    document.getElementById('experience').addEventListener('input', (event) => {
        document.getElementById('resume-preview').innerText = event.target.value;
    });

    document.getElementById('export-btn').addEventListener('click', () => {
        alert('Resume exported as PDF!');
    });
});
