# Echo Bot / Эхо-бот

## English

### Description
This is a Telegram echo bot with additional features. It repeats user messages, handles inline buttons, and provides basic image processing capabilities.

### Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file in the root directory with the following content:
   ```
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   DB_USER=your_database_username
   DB_HOST=localhost
   DB_NAME=your_database_name
   DB_PASSWORD=your_database_password
   DB_PORT=5432
   ```
4. Replace the placeholder values with your actual Telegram bot token and database credentials
5. Run the bot: `npm start`

### Features
- Echo user messages
- Handle inline buttons
- Basic image processing
- User settings (language, notifications)
- Markdown formatting support

### Commands
- `/start` - Start the bot
- `/help` - Show help message
- `/settings` - Manage user settings

## Русский

### Описание
Это Telegram эхо-бот с дополнительными функциями. Он повторяет сообщения пользователей, обрабатывает встроенные кнопки и предоставляет базовые возможности обработки изображений.

### Установка
1. Клонируйте репозиторий
2. Установите зависимости: `npm install`
3. Создайте файл `.env` в корневой директории со следующим содержимым:
   ```
   TELEGRAM_BOT_TOKEN=ваш_токен_бота_здесь
   DB_USER=ваше_имя_пользователя_базы_данных
   DB_HOST=localhost
   DB_NAME=имя_вашей_базы_данных
   DB_PASSWORD=пароль_вашей_базы_данных
   DB_PORT=5432
   ```
4. Замените заполнители на ваш актуальный токен Telegram бота и учетные данные базы данных
5. Запустите бота: `npm start`

### Функции
- Эхо сообщений пользователя
- Обработка встроенных кнопок
- Базовая обработка изображений
- Настройки пользователя (язык, уведомления)
- Поддержка форматирования Markdown

### Команды
- `/start` - Запустить бота
- `/help` - Показать справку
- `/settings` - Управление настройками пользователя