// Проверка, поддерживает ли браузер Geolocation API
if ("geolocation" in navigator) {
    // Запрос местоположения
    navigator.geolocation.getCurrentPosition(function(position) {
        // Полученные данные о местоположении
        const latitude = position.coords.latitude;  // Широта
        const longitude = position.coords.longitude;  // Долгота
        const accuracy = position.coords.accuracy;  // Точность (в метрах)

        // Вывод данных
        console.log("Широта: " + latitude);
        console.log("Долгота: " + longitude);
        console.log("Точность: " + accuracy + " метров");

        // Находим элемент на странице и вставляем туда информацию
        document.getElementById("location-info").innerHTML = 
        "Широта: " + latitude + "<br>" +
        "Долгота: " + longitude + "<br>" +
        "Точность: " + accuracy + " метров";

        // Дополнительно можно использовать эти данные для отображения карты или других целей
    }, function(error) {
        console.error("Ошибка получения местоположения: " + error.message);
    });
} else {
    console.log("Geolocation не поддерживается этим браузером.");
}
