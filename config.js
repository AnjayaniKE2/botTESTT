const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	anto: 'https://hardianto.xyz',
    zenz: 'https://zenzapi.xyz',
}


// Apikey Website Api
global.APIKeys = {
        'https://hardianto.xyz': 'hardianto',
        'https://zenzapi.xyz': 'YourApikey', //Untuk Mendapatkan Apikey Silahkan Register Di : https://zenzapi.xyz
        
}


// Other
global.Prefix = 'Multi'
global.modelMenu = 'locButton'
global.owner = ['628387705057']
global.premium = ['6285878313791']
global.meki = '6285878313791'
global.ownerNumber = '6281398654852'
global.packname = 'β¨ πΊπΈππ°πΊπΈππ³ β¨'
global.author = 'οΌ£ο½ο½ο½ο½ο½ο½ο½ - οΌ­οΌ€'
global.sessionName = 'kizakixd'
global.prefa = ['','!','.','π¦','π€','πΏ']
global.Mode = 'Public'
global.mess = {
    success: 'Berhasil.',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    done: 'Done',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
    wrongFormat: 'Perintah Salah!!\nSertakan Link setelah Command..',
    example1: 'Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)'
,
    example2: 'Good Bye @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @subject (Group Name)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)', 
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12'
}
global.limitawal = {
    premium: "Infinity",
    free: 1000
}
global.thumb = fs.readFileSync('./media/zaki.jpg')
global.pathImg = fs.readFileSync('./media/gambar.jpg')
global.fakeImg = fs.readFileSync('./media/fake.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
