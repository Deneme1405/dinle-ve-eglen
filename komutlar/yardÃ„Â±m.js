const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komut Listesi")
  .setDescription('')
  .setColor(0x00ffff)
      .setDescription('**•** dve!eğlence = Eğlence komutları\n**•** dve!kişisel = Kişisel komutlar\n**•** dve!yetkili = Yetkili komutları\n**•** dve!oyun = Oyun komutları\n**•** dve!müzik = Müzik komutları\n**•** dve!destek = Destek komutları')
      .addField("» Linkler", `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=460723895268278283&scope=bot&permissions=2146958591)` + "**\n**"+`[DBL Oyver](https://discordbots.org/bot/460723895268278283)`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/U2byS7x)`, false)
      .setFooter('Örnek kullanım: dve!eğlence')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help','yardim'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};