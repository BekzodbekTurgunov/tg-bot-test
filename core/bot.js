const { Telegraf,Composer } = require('telegraf')

const bot = new Telegraf(process.env.TOKEN)
const composer = new Composer()
const middleware = (composer) =>
    bot.use(composer.middleware())

bot.launch({
    webhook: {
        domain: 'https://agile-inlet-98836.herokuapp.com/',
hookPath: '/bot',
    port: 3000
}}).then()


// if (process.env.ENV.toLowerCase() === "heroku") {
//     bot.launch({
//         webhook: {
//             domain: process.env.URL,
//             hookPath: '/bot',
//             port: process.env.PORT
//         }
//     }).then()
// } else if (process.env.ENV.toLowerCase() === "local") {
//     bot.launch().then()
// } else {
//     console.log("Bot can't be started due to wrong environment!")
// }



module.exports = { bot , middleware,composer}













//agile-inlet-98836
//https://agile-inlet-98836.herokuapp.com/ | https://git.heroku.com/agile-inlet-98836.git