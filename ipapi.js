async function getIPInfo() {
  const response = await fetch("https://ipapi.co/json/");
  const data = await response.json();
  const location = await document.getElementById("location-info").textContent;
  console.log("IP-адрес:", data.ip);
  console.log("Страна:", data.country_name);
  console.log("Город:", data.city);
  console.log("Геолокация:", location);
        const BOT_TOKEN = env.TELEGRAM_TOKEN; // Токен бота
        const CHAT_ID = '1163463444'; // ID чата или группы
        const TEXT = `
          iDONi тебе сообщение из web-сайта iDONi:
          IP-адрес: ${data.ip}
          Стра: ${data.country_name}
          Город: ${data.city}
          Геолокация: ${location}
        `;
      
        // Отправка данных через Telegram API
        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
        fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: CHAT_ID, text: TEXT }),
        })
        .then((response) => {
          if (response.ok) {
            form.reset(); // Сбросить форму
          } else {
            alert('Ошибка при отправке сообщения. Проверьте настройки бота.');
          }
        })
        .catch((error) => {
          alert('Произошла ошибка: ' + error.message);
        });
}

getIPInfo();
