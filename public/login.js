// login.js
function login(type) {
    const loginForm = document.getElementById('loginForm');
    loginForm.classList.remove('hidden');
    
    loginForm.onsubmit = async (event) => {
      event.preventDefault();
  
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const url = type === 'vulneravel' ? '/auth/login-vulneravel' : '/auth/login-seguro';
  
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
  
        const result = await response.json();
        alert(result.message);
  
        if (response.ok) {
          // Redireciona para a página de comentários
          window.location.href = 'comments.html';
        }
      } catch (error) {
        alert('Erro ao fazer login');
      }
    };
  }
  