const body = document.querySelector('body');
const div = document.createElement('div');

div.innerHTML = `<input type="checkbox" class="checkbox" id="checkbox2">
<label for="checkbox2" class="label theme-switcher">
<i class="fas fa-moon"></i>
<i class='fas fa-sun'></i>
<div class='ball'></div>
</label>`;

div.classList.add('under-page');
body.append(div);

const switcher = document.querySelectorAll('.theme-switcher');

console.log(switcher);
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
}

for (const item of switcher) {
  item.addEventListener('click', () => {
    body.classList.toggle('light-theme');

    if (localStorage.getItem('theme') === 'light') {
      localStorage.setItem('theme', 'dark');
      return;
    }

    localStorage.setItem('theme', 'light');
  });
}


