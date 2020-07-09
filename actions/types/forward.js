const {composer, middleware} = require('../../core/bot')
const {admin, confession} = require('../../config')

composer.on('message',ctx => {
        ctx.telegram.forwardMessage(
            admin,
            ctx.from.id,
            ctx.message.message_id
        ).then()

})


middleware(composer)






