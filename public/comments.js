// comments.js
function postComment(type) {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value;
    const url = type === 'vulneravel' ? '/comments/comment-vulneravel' : '/comments/comment-seguro';
  
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id: 1, content: commentText })
    })
    .then(response => response.json())
    .then(data => {
      if (data.comment) {
        displayComment(data.comment.content, type);
      } else {
        alert(data.message || 'Erro ao enviar o comentário');
      }
    })
    .catch(error => alert('Erro ao enviar o comentário'));
  }
  
  function displayComment(content, type) {
    const commentsDisplay = document.getElementById('commentsDisplay');
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
  
    if (type === 'vulneravel') {
      // Cria um contêiner temporário para interpretar o HTML como código
      commentDiv.innerHTML = `<strong>Vulnerável:</strong> ${content}`;
    } else {
      // Exibe o conteúdo seguro como texto normal
      commentDiv.textContent = `Seguro: ${content}`;
    }
  
    commentsDisplay.appendChild(commentDiv);
  }
  