import requests
import os

# Вставь свой токен Telegram-бота
TELEGRAM_TOKEN = 'your_telegram_bot_token'
CHAT_ID = 'your_chat_id'

# Вставь свой GitHub токен и имя репозитория
GITHUB_TOKEN = 'your_github_token'
REPO_OWNER = 'your_github_username'
REPO_NAME = 'your_repository_name'

# Функция для отправки сообщения в Telegram
def send_telegram_message(message):
    url = f"https://api.telegram.org/bot{TELEGRAM_TOKEN}/sendMessage"
    params = {
        "chat_id": CHAT_ID,
        "text": message
    }
    requests.get(url, params=params)

# Получение данных о клонированиях репозитория
def get_clone_data():
    url = f"https://api.github.com/repos/{REPO_OWNER}/{REPO_NAME}/traffic/clones"
    headers = {
        "Authorization": f"token {GITHUB_TOKEN}"
    }
    response = requests.get(url, headers=headers)
    data = response.json()
    
    # Извлечение данных о клонированиях
    count = data['count']
    uniques = data['uniques']
    
    return count, uniques

# Основная логика
def main():
    count, uniques = get_clone_data()
    message = f"Количество клонирований: {count}, Уникальных: {uniques}"
    
    # Отправляем уведомление в Telegram
    send_telegram_message(message)

if __name__ == "__main__":
    main()
