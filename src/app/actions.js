import { Markup } from "telegraf";

export function registerBotActions(bot) {
  bot.action(/change_language/, async (ctx) => {
    await ctx.answerCbQuery();
    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('English', 'set_lang_en')],
      [Markup.button.callback('Русский', 'set_lang_ru')],
      [Markup.button.callback('Back', 'back_to_settings')]
    ]);
    await ctx.editMessageText('Select your preferred language:', keyboard);
  });

  bot.action(/set_lang_(.+)/, async (ctx) => {
    const lang = ctx.match[1];
    await ctx.answerCbQuery(`Language set to ${lang}`);
    // Here you would typically update the user's language preference in the database
    await ctx.editMessageText(`Your language has been set to: ${lang}`);
  });

  bot.action('toggle_notifications', async (ctx) => {
    await ctx.answerCbQuery();
    // Here you would toggle the user's notification settings in the database
    await ctx.editMessageText('Notifications toggled!');
  });

  bot.action('back_to_settings', async (ctx) => {
    await ctx.answerCbQuery();
    const keyboard = Markup.inlineKeyboard([
      [Markup.button.callback('Change Language', 'change_language')],
      [Markup.button.callback('Toggle Notifications', 'toggle_notifications')]
    ]);
    await ctx.editMessageText('Choose a setting to modify:', keyboard);
  });
}
