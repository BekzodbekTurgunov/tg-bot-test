const {Markup} = require('telegraf')
const {composer, middleware} = require('../../core/bot')
const {admin, confession} = require('../../config')
composer.on('text', ctx => {

    const keyboard = Markup.inlineKeyboard(
        [
            Markup.callbackButton("✅",`accept_${ctx.message.text}`),
            Markup.callbackButton("❌",`decline_${ctx.message.text}`)
        ]
    )

    if (ctx.from.id!=admin) {
         ctx.telegram.sendMessage(
             admin,
             `<b>Text: </b> ${ctx.message.text}`,{
                 parse_mode: "HTML",
                 reply_markup:keyboard
             }
         ).then()
    }
    if (ctx.from.id == admin){
        ctx.telegram.sendMessage(confession,ctx.message.text + '\n@StubbornHelper').then()
    }
})

composer.action(/accept_(.+)/gi, ctx => {
    let match = ctx.match[1]
    ctx.telegram.sendMessage(confession,match + '\n@StubbornHelper').then()
    ctx.editMessageText(`<b>THIS MESSAGE :</b>${match}  \n ✅  sended`,{
        parse_mode:"HTML"
    })

})

composer.action(/decline(.+)/gi, ctx => {
    let match = ctx.match[1]
    ctx.editMessageText(`<b>THIS MESSAGE :</b>${match} \n ❌ CANCALED`,{
        parse_mode:"HTML"
    })

})


middleware(composer)