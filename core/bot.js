const { Telegraf,Composer } = require('telegraf')
const {Composer} = require('micro-bot')


// const bot = new Telegraf(process.env.TOKEN)
const bot =  new Composer()

const composer = new Composer()
const middleware = (composer) =>
    bot.use(composer.middleware())

// bot.launch().then()

module.exports = { bot , middleware,composer}

//agile-inlet-98836
//https://agile-inlet-98836.herokuapp.com/ | https://git.heroku.com/agile-inlet-98836.git