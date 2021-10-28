(function() {
  var hideTime;

  function process() {
    hideTime = Date.now() + 1000;
    update(true);
  }

  function tick() {
    if (hideTime >= Date.now()) return;
    update(false);
  }

  function update(isVisible) {
    const buttons = Array.from(document.querySelectorAll('button'));
    const streamButtons = buttons.filter(x => Array.from(x.classList).some(y => y.startsWith('StreamHUD')));
    streamButtons.forEach(x => x.style.display = isVisible ? 'inherit' : 'none');
  }

  document.addEventListener('keydown', process);
  document.addEventListener('keyup', process);
  document.addEventListener('mousedown', process);
  document.addEventListener('mousemove', process);
  document.addEventListener('mouseup', process);
  setInterval(tick, 1000);
})();
