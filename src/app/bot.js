import { Telegraf, session } from "telegraf";
import { config } from "dotenv";
import { setBotCommands, registerBotCommands } from "./commands.js";
import { registerBotActions } from "./actions.js";
import { createUserTables } from "../backend/db/db_users.js";
import { escapeMarkdown } from "../utils/funcs.js";


const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.use(session());

setBotCommands(bot);
registerBotCommands(bot);
registerBotActions(bot);

bot.on('text', (ctx) => {
    const escapedMessage = escapeMarkdown(ctx.message.text);
    ctx.replyWithMarkdownV2(`You said: ${escapedMessage}`);
  });
  
  bot.on('photo', (ctx) => {
    ctx.reply('I received your photo! Here\'s what I can do with it:');
    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('Analyze', 'analyze_photo')],
      [Markup.button.callback('Apply Filter', 'apply_filter')]
    ]);
    ctx.reply('Choose an action:', keyboard);
  });
  

export async function startBot() {
  await createUserTables();
  await bot.launch();
  console.log('Bot started');
}
