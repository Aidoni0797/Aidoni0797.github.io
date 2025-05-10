const axios = require('axios');
const cheerio = require('cheerio');
const TelegramBot = require('node-telegram-bot-api');

// Telegram ���������
const TELEGRAM_TOKEN = '7722533303:AAGkV0WauU6r0UBgqYoxnStWZtoRkxE25tQ';
const CHAT_ID = '1163463444'; // ������ �� ID

const bot = new TelegramBot(TELEGRAM_TOKEN);

// ������� Scamalytics
async function parseScamalytics(ip) {
    try {
        const url = `https://scamalytics.com/ip/${ip}`;
        const { data } = await axios.get(url, {
            headers: { 'User-Agent': 'Mozilla/5.0' }
        });

        const $ = cheerio.load(data);

        const riskScore = $('.ip-risk-score').text().trim();
        const riskText = $('.ip-risk-score-text').text().trim();

        let facts = '';
        $('table.ip-facts tr').each((i, elem) => {
            const key = $(elem).find('td').eq(0).text().trim();
            const value = $(elem).find('td').eq(1).text().trim();
            if (key && value) {
                facts += `${key}: ${value}\n`;
            }
        });

        const message = `IP: ${ip}\n${riskScore} - ${riskText}\n${facts}`;
        return message;

    } catch (error) {
        return `������: ${error.message}`;
    }
}

// �������� � Telegram
async function sendToTelegram(message) {
    await bot.sendMessage(CHAT_ID, message);
}

// ���� � IP
(async () => {
    const ip = '57.128.215.9';
    const info = await parseScamalytics(ip);
    await sendToTelegram(info);
})();
