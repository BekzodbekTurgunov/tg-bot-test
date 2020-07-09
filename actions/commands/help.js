const {middleware,composer} = require('../../core/bot')

composer.help(ctx => {
  ctx.replyWithHTML(`ishlatish mumkin bo'lgan commandalar ro'yxati : \n`+
        `/start -  <code> botni ishga tushirish</code>\n`+
        `/help - <code>shu smsni ko'rsatish</code> \n`+
        `\n`+
      `<i>Istalgan ko'rinishda habar yuboring, men kanalga joylayman !!!</i>`
  ).then()

})

middleware(composer)