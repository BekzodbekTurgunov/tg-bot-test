const {composer,middleware} = require('../../core/bot')
const { admin, confession} = require('../../config')


composer.on('video',ctx => {

    if (ctx.from.id!=admin){
        ctx.telegram.sendVideo(admin, ctx.message.video.file_id ).then()
    }

    if (admin == ctx.from.id){
        ctx.telegram.sendVideo(confession,ctx.message.video.file_id).then()
    }
})


middleware(composer)