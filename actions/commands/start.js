const {middleware,composer} = require('../../core/bot')

composer.start( ctx=>{
    ctx.replyWithHTML(
        `Xurmatli ${ctx.from.first_name} , konfession managerga hush kelibsiz`
    ).then()
})


middleware(composer)