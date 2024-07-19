const toggles = document.querySelectorAll('input[type="checkbox"]');

toggles.forEach((toggle) => {
  toggle.addEventListener('change', (e) => {
    const inputId = e.target.id + '-input';
    const inputContainer = document.getElementById(inputId);
    if (e.target.checked) {
      inputContainer.classList.remove('hidden');
    } else {
      inputContainer.classList.add('hidden');
    }
  });
});