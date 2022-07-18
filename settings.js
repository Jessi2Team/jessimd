const fs = require('fs')
const chalk = require('chalk')
const  { indonesia, english} = require(`./language`)

// Website Api
global.APIs = {
	alfa: 'https://api.zeeoneofc.xyz', //apabila link api eror, segera laporkan ke owner
}

// Free apikey
global.APIKeys = {
	'https://api.zeeoneofc.xyz': 'V12',  // login https://api.zeeoneofc.xyz to get apikey || https://api-alphabot.herokuapp.com
}

// setting 
global.autoread = false // auto read pesan / message
global.autobio = true 

//language
//Available in indonesia & english
//You can request others language 
global.language = english  //change indonesia to english if you don't understand the language used by the bot


// Other
global.botname = "OnlySon.BOT ʲᵉˢˢⁱ-ᵐᵈ<3"//namabot kalian
global.ownername= "OnlySon TEAM & AlphaBot UI" //nama kalian
global.myweb ="https://bit.ly/3nSZDbS" //bebas asal jan hapus
global.youtube = "https://m.youtube.com/channel/UCnF4-0Lg9bdUZsdpRw0-qeA" //bebas asal jan hapus
global.github = "https://github.com/MrChaby/Jessi/" //bebas
global.email = "jessi2devolopteam@outlook.com" //bebas
global.region = "SriLanka" //bebas
global.timezone = 'Asia/Colombo' //  timezone wib
global.owner = ["94757534153"] //ganti agar fitur owner bisa di gunakan
global.ownernomer = "94757534153" // nomor wa kalian
global.ownernomerr = "+94757534153" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay

global.packname = '© OnlySon.BOT ʲᵉˢˢⁱ-ᵐᵈ' //sticker wm ubah
global.author = 'sticker pack' //sticker wm ganti nama kalian
global.sessionName = 'session'
global.typemenu = 'document'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗 Done',
    admin: 'This Command Can Only Be Used By Admin !',
    botAdmin: 'This Command Can Only Be Used When The Bot Becomes Admin !',
    owner: 'This command can only be used by the owner !',
    group: 'This Command Can Only Be Used In Group !',
    private: 'This Command Can Only Be Used In Private !',
	bot: 'Bot Number User Special Features',
    errtoimg: 'Sorry Currently Not Support Gif Sticker !',
    wait: '⏳ Processing',
	lockCmd: 'Features Not Activated By Owner !',
	example1: 'Welcome @user In Group @subject Do Not Forget To Read The Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
