const form = document.getElementById('feedbackForm');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Получение данных из формы
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const exc = document.getElementById('excellent-count').textContent = excellentCount;
  const bad = document.getElementById('bad-count').textContent = badCount;
  const location = document.getElementById("location-info").textContent;
  // Данные Telegram
  const BOT_TOKEN = '7722533303:AAGkV0WauU6r0UBgqYoxnStWZtoRkxE25tQ'; // Токен бота
  const CHAT_ID = '1163463444'; // ID чата или группы
  const TEXT = `
    iDONi тебе сообщение из web-сайта iDONi:
    Имя: ${name}
    Email: ${email}
    Сообщение: ${message}
    Отлично: ${exc}
    Плохо: ${bad}
    Геолокация: ${location}
  `;

  // Отправка данных через Telegram API
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: CHAT_ID, text: TEXT }),
    });

    if (response.ok) {
      form.reset(); // Сбросить форму
    } else {
      alert('Ошибка при отправке сообщения. Проверьте настройки бота.');
    }
  } catch (error) {
    alert('Произошла ошибка: ' + error.message);
  }
});
