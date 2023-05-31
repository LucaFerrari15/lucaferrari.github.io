const switchTheme = () => {
  const rootElem = document.documentElement;
  let dataTheme = rootElem.getAttribute('data-theme');

  const newTheme = (dataTheme === 'light') ? 'dark' : 'light';
  rootElem.setAttribute('data-theme', newTheme);
  setSVG();
};

function setSVG() {
  if (document.documentElement.getAttribute('data-theme') === 'light') {
    document.getElementById("toggle").style.backgroundImage = "url('../public/brightness-high-fill.svg')";
    document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#fff');
  } else {
    document.getElementById("toggle").style.backgroundImage = "url('../public/moon-stars-fill.svg')";
    document.querySelector('meta[name="theme-color"]').setAttribute('content',  '#0e0b16');
  }
}

setSVG();
document.querySelector('#toggle').addEventListener('click', switchTheme);
