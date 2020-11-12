exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `☣️ -----[ *MENU DONASI ${BotName]----- ☣️
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

🔱 *${tampilTanggal}*
🔱 *${tampilWaktu}*

♻ Silahkan donasi dibawah ini :
   
☢ *OVO*: 085726585985
☢ *#DANA*: 085726585985
☢ *#BANK*: -
☢ *#PULSA*: 085726585985
☢ *#GOPAY*: 085726585985
☢ *#SAWERIA*: -

📺 *Iklan* : *ROSUGO ESPORT*

✅ Follow akun instagram admin ${instagramlu}

🔱 INFORMASI COVID-19 TERBARU!

🔱 POSITIF: *${corohelp.confirmed.value}*
🔱 SEMBUH: *${corohelp.recovered.value}*
🔱 MENINGGAL: *${corohelp.deaths.value}*
🔱 UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${085726585985}*
  
🔱 Gunakan dengan bijak ‼️
🔱 Bot ini berjalan ${24jm} ‼️

💢 Official Grub : ${grupch1}



  
☣️ -----[ *POWERED BY ${BotName}* ]----- ☣️`
}
