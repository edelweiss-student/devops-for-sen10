const button = document.getElementById('counter-btn');
const info = document.getElementById('deploy-info');
let count = 0;

//added the missing semicolon

button.addEventListener('click', () => {
  count += 1;
  button.textContent = `Clicked ${count} time${count === 1 ? '' : 's'}`;
});

info.textContent = `Page loaded at ${new Date().toLocaleTimeString()}`;
