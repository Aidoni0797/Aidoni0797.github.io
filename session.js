window.onload = function() {
    // Получаем данные пользователя (например, IP и геолокацию)
    fetch('https://ipinfo.io/json?token=your_token')  // Замените на ваш токен для получения IP
        .then(response => response.json())
        .then(data => {
            // Отправляем эти данные в бот или на сервер
            fetch('https://your-bot-api.com/update', {  // Адрес для отправки данных в бота
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ip: data.ip,
                    location: data.city,  // Геолокация
                    country: data.country, // Страна
                    time: new Date().toISOString(),  // Время
                }),
            })
            .then(response => response.json())
            .then(result => console.log('Данные отправлены в бот'))
            .catch(error => console.error('Ошибка при отправке данных:', error));
        })
        .catch(error => console.error('Не удалось получить IP:', error));
};
