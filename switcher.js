const switcher = document.querySelector('.theme-switcher');
const body = document.querySelector('body');

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
}

switcher.addEventListener('click', () => {
  body.classList.toggle('light-theme');

  if (localStorage.getItem('theme') === 'light') {
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
    return;
  }

  localStorage.setItem('theme', 'light');
});
