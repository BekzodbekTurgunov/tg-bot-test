const {composer,middleware} = require('../../core/bot')
const { admin, confession} = require('../../config')


composer.on('photo',ctx => {

    if (ctx.from.id !=admin) {
        ctx.telegram.sendPhoto(admin, ctx.message.photo[0].file_id).then()
    }
    if (admin == ctx.from.id){
        ctx.telegram.sendPhoto(confession,ctx.message.photo[0].file_id,{
            caption:'@StubbornHelper'
        }).then()
    }
})


middleware(composer)