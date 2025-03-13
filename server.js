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
