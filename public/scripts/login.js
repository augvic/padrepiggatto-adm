import { auth } from '../firebase/firebase-config.js';

import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js';

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-btn');

loginButton.addEventListener('click', async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log('Login realizado com sucesso:', user);
    
    window.location.href = 'dashboard.html';
  } catch (error) {
    console.error('Erro ao fazer login:', error.message);
    alert('Email ou senha inválidos.');
  }
});
