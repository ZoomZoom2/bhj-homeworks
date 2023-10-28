const editor = document.getElementById('editor');

editor.value = localStorage.getItem('editor');

function StoreEditor(e) {
  localStorage.setItem('editor', editor.value);
}

editor.addEventListener('input', StoreEditor);