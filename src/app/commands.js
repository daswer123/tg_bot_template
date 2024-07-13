import { Markup } from "telegraf";
import { escapeMarkdown } from "../utils/funcs.js";

export function setBotCommands(bot) {
  bot.telegram.setMyCommands([
    { command: 'start', description: 'Start the bot' },
    { command: 'help', description: 'Show help' },
    { command: 'settings', description: 'User settings' },
  ]);
}

export function registerBotCommands(bot) {
  bot.command('start', (ctx) => {
    const message = escapeMarkdown(`Welcome, ${ctx.from.first_name}! I'm an advanced echo bot.`);
    ctx.replyWithMarkdownV2(message);
  });

  bot.command('help', (ctx) => {
    const helpMessage = `
*Available commands:*
/start \\- Start the bot
/help \\- Show this help message
/settings \\- Manage your settings

*Features:*
\\- Echo your messages
\\- Handle inline buttons
\\- Process images \\(send me an image\\)
    `;
    ctx.replyWithMarkdownV2(helpMessage);
  });

  bot.command('settings', (ctx) => {
    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('Change Language', 'change_language')],
      [Markup.button.callback('Toggle Notifications', 'toggle_notifications')]
    ]);
    ctx.reply('Choose a setting to modify:', keyboard);
  });
}
