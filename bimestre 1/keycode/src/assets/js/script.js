const $result = document.querySelector('#result');

document.body.addEventListener('keypress', function (event) {
  const classToRemove = 'press-key';

  if ($result.classList.contains(classToRemove)) {
    $result.classList.remove(classToRemove);
    $result.addEventListener('click', textCopy);
  }

  $result.textContent = event.keyCode;
});

function textCopy() {
  const tempInput = document.createElement('input');
  tempInput.value = this.textContent;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand('copy');
  tempInput.remove();

  tooltip();
}

function tooltip() {
  const $body = document.querySelector('body');
  $body.classList.add('tooltip');
  setTimeout(function () {
    $body.classList.remove('tooltip');
  }, 2000);
}
