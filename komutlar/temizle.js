const { Command } = require('discord.js-commando');

exports.run = (client, message, params) => {
		const sayi1 = args.limit;
		const sayi  = Number(sayi1);
		if (sayi < 2) return msg.channel.send(client.config.customEmojis.basarisiz + ' En az 2 mesaj silebilirim.');
		if (sayi > 100) return msg.channel.send(client.config.customEmojis.basarisiz + ' En fazla 100 mesaj silebilirim.');
		if (sayi < 100) {
			msg.channel.send(sayi + ' adet mesaj sorgulanıyor...').then(smsg => {
				msg.channel.fetchMessages({limit: parseInt(sayi) + 2}).then(messages => {
					smsg.edit(parseInt(messages.size) - 2 + ' adet mesaj bulundu. Bulunan mesajlar siliniyor...').then(bmsg => {
						msg.channel.bulkDelete(messages.size, true).then(deletedMessages => {
							if (deletedMessages.size < 1) return bmsg.edit(client.config.customEmojis.basarisiz + ' Hiç mesaj silinemedi. _(Tahminen 14 günden daha eski mesajlar var ise bundan dolayı mesajlar silinememiş olabilir.)_').then(msg => msg.delete(3000));
							const mesajadet = parseInt(deletedMessages.size) - 2;
							msg.channel.send(client.config.customEmojis.basarili + ' ' + mesajadet + ' adet mesaj silindi!').then(msg => msg.delete(3000));	
						})
					})
				});
			});
		} else {
			msg.channel.send(sayi + ' adet mesaj sorgulanıyor...').then(smsg => {
				msg.channel.fetchMessages({limit: parseInt(sayi)}).then(messages => {
					smsg.edit(parseInt(messages.size) + ' adet mesaj bulundu. Bulunan mesajlar siliniyor...').then(bmsg => {
						msg.channel.bulkDelete(messages.size, true).then(deletedMessages => {
							if (deletedMessages.size < 1) return bmsg.edit(client.config.customEmojis.basarisiz + ' Hiç mesaj silinemedi. _(Tahminen 14 günden daha eski mesajlar var ise bundan dolayı mesajlar silinememiş olabilir.)_').then(msg => msg.delete(3000));
							const mesajadet = parseInt(deletedMessages.size);
							msg.channel.send(client.config.customEmojis.basarili + ' ' + mesajadet + ' adet mesaj silindi!').then(msg => msg.delete(3000));	
						});
					});
				});
			});
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'temizle',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
}
