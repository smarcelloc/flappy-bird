function callbackEventClick() {
  global.screenCurrent.action();
}

function callbackEventKeypress(event: KeyboardEvent) {
  if (event.code === 'Enter' || event.code === 'Space') {
    global.screenCurrent.action();
  }
}

function screenEventAction() {
  window.addEventListener('keypress', callbackEventKeypress, false);
  window.addEventListener('click', callbackEventClick, false);
}

export default screenEventAction;
