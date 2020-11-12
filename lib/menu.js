exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `☣️ -----[ *MENU ${ChatBotwa}* ]----- ☣️
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

🔱 *${tampilTanggal}*
🔱 *${tampilWaktu}*

♻ Command / Perintah :
   
=> *1.$#sticker

=> *2.$#nulis

=> *3.$#pantun

=> *4.$#yt

=> *5.$#quotes

=> *6.$#ptl[cewek/cowok]

=> *7.$#randomanime

=> *8.$#ttsid reuz

=> *9.$#quran

=> *10.$#info

=> *11.$#say 

=> *12.$#ytmp3

=> *13.$#ig

=> *14.$#fb

=> *15.$#twt

=> *16.$#wiki

♻️ JANGAN  LUPA DONASI AGAR BOT AKTIF TERUS!
♻️ MAU DONASI? SILAHKAN KETIK #donate

📺 *Iklan* : *ROSUGO ESPORT*

✅ Follow akun instagram admin ${instagramlu}

🔱 INFORMASI COVID-19 TERBARU!

🔱 POSITIF: *${corohelp.confirmed.value}*
🔱 SEMBUH: *${corohelp.recovered.value}*
🔱 MENINGGAL: *${corohelp.deaths.value}*
🔱 UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
🔱 Gunakan dengan bijak ‼️
🔱 Bot ini berjalan ${kapanbotaktif} ‼️

💢 Official Grub : ${grupch1}



  
☣️ -----[ *POWERED BY ${ChatBotwa}* ]----- ☣️`
}
