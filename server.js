// Получаем IP через публичное API
        fetch("https://api.ipify.org?format=json")
            .then(response => response.json())
            .then(data => {
                console.log(data.ip);
            })
            .catch(error => {
                console.log('Ошибка получения IP');
            });

        // Получаем заголовки браузера
        const headers = {
            "User-Agent": navigator.userAgent,
            "Language": navigator.language,
            "Platform": navigator.platform,
        };

        console.log(JSON.stringify(headers, null, 2));

        const BOT_TOKEN = '8178967594:AAE14G4kmVksV-Y3oyZNBQkxe98JDYQgzws'; // Токен бота
        const CHAT_ID = '1163463444'; // ID чата или группы
        const TEXT = `
          iDONi лично к тебе:
          ${JSON.stringify(headers, null, 2)}
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
