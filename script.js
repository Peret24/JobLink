document.querySelectorAll('.job-card').forEach(card => {
  const heart = document.createElement('button');
  heart.innerHTML = '<i class="bi bi-heart text-secondary"></i>';
  heart.className = 'btn p-0 position-absolute bottom-0 end-0 me-2 mb-2';
  heart.style.fontSize = '1.2rem';
  card.appendChild(heart);

  heart.addEventListener('click', () => {
    const icon = heart.querySelector('i');
    if (icon.classList.contains('bi-heart')) {
      icon.classList.replace('bi-heart', 'bi-heart-fill');
      icon.classList.add('text-danger');
    } else {
      icon.classList.replace('bi-heart-fill', 'bi-heart');
      icon.classList.remove('text-danger');
    }
  });
});
