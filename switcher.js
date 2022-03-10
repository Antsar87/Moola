const switcher = document.querySelector('.theme-switcher');
const body = document.querySelector('body');

const sun = () => {
  switcher.innerHTML = "<img src='img/sun-solid.svg' />";
};

const moon = () => {
  switcher.innerHTML = "<img src='img/moon-solid.svg' />";
};

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  moon();
}else {
  switcher.innerHTML = "<img src='img/sun-solid.svg' />";
}

if (localStorage.getItem('theme') === 'dark') {
  sun();
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
