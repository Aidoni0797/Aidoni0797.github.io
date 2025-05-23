async function getIPInfo() {
  const response = await fetch("https://ipinfo.io/json");
  const data = await response.json();
  const location = await document.getElementById("location-info").textContent;
  console.log("IP-адрес:", data.ip);
  console.log("Страна:", data.hostname);
  console.log("Город:", data.city);
  console.log("Геолокация:", location);
        const BOT_TOKEN = '7722533303:AAGkV0WauU6r0UBgqYoxnStWZtoRkxE25tQ'; // Токен бота
        const CHAT_ID = '1163463444'; // ID чата или группы
        const TEXT = `
          iDONi тебе сообщение из web-сайта iDONi:
          IP-адрес: ${data.ip}
          Стра: ${data.hostname}
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
