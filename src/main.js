const NOTIFICATION_DELAY = 3000;

const notification = document.querySelector('.js-alert');
notification.addEventListener('click', onNotificationClick);
let timerId = null;

showNotification();

function showNotification() {
  notification.classList.add('is-visible');

  timerId = setTimeout(() => {
    console.log('setTimeout');
    hideNotification();
  }, NOTIFICATION_DELAY);
}

function onNotificationClick() {
  hideNotification();
  clearTimeout(timerId);
}

function hideNotification() {
  notification.classList.remove('is-visible');
}
