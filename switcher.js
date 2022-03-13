const switcher = document.querySelector('.theme-switcher');
const body = document.querySelector('body');
const checkBox = document.querySelector('#checkbox');

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  checkBox.checked;
}

switcher.addEventListener('click', () => {
  body.classList.toggle('light-theme');

  if (localStorage.getItem('theme') === 'light') {
    localStorage.setItem('theme', 'dark');
    sun();

    return;
  }

  localStorage.setItem('theme', 'light');
  moon();
});
