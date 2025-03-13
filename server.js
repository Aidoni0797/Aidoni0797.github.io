const express = require("express");

const app = express();

app.get("/", (req, res) => {
    const headers = req.headers;
    const realIP = headers["x-forwarded-for"] || "Не найден"; // Возможный реальный IP
    const clientIP = req.socket.remoteAddress; // IP, который видит сервер
    const userAgent = headers["user-agent"] || "Не найден"; // Информация о браузере

    const logData = {
        "Real IP (если прокси передает)": realIP,
        "IP запроса": clientIP,
        "User-Agent": userAgent,
        "Все заголовки": headers
    };

    console.log(logData); // Логируем в консоль

    res.json(logData); // Отправляем ответ в формате JSON
});

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});