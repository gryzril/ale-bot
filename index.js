const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const fs = require('fs');


const token = 'NzQzMjc1OTExOTU2MjY3MTQx.XzSTog.OcYae_i8SgQKhH9ojrrMqXsqu_Y';

bot.on('ready', () =>{
    console.log('AleBot is Online')
})

bot.on('message', msg=> {
    if (msg.content === "Hi, AleBot") {
        msg.reply('Bro');
    }
}
    )

bot.on('message', msg=> {
    if ((msg.content.toLowerCase().includes("alebot")) | ((msg.content.toLowerCase().includes("ale ")) & msg.content.toLowerCase().includes("bot"))) {
        msg.reply('Bro');
    }
})


bot.login(token);


//Plays youtube clip given async message of '?play ' + URL
bot.on('message', async message => {
    if (!message.guild) return;

    if (message.content.toLowerCase().includes("?play") & !message.content.toLowerCase().includes("shit")) {
        const voiceChannel = message.member.voice.channel;
        if (voiceChannel) {
            const connection = await message.member.voice.channel.join();

            var toPlayArr = message.content.split(" ");

            var toPlay = toPlayArr[1];

            const stream = ytdl(toPlay, { filter: 'audioonly' });
            const dispatcher = connection.play(stream);
            dispatcher.on('finish', () => voiceChannel.leave());
        }

    }
});

//Plays shitty quality clip
bot.on('message', async message => {
    if (!message.guild) return;

    if (message.content.toLowerCase().includes("?play shit")) {
        const voiceChannel = message.member.voice.channel;
        if (voiceChannel) {
            const connection = await message.member.voice.channel.join();

            var toPlayArr = message.content.split(" ");

            var toPlay = toPlayArr[2];

            const stream = ytdl(toPlay, { filter: 'audioonly' });
            const dispatcher = connection.play(stream);
            dispatcher.setVolume(.1);
            
            dispatcher.on('finish', () => voiceChannel.leave());
        }

    }
});

//Bruh Function
bot.on('message', async message => {
    if (!message.guild) return;

    if (message.content.toLowerCase() === "?speak") {
        const voiceChannel = message.member.voice.channel;
        if (voiceChannel) {
            const connection = await message.member.voice.channel.join();

            var toPause = Math.floor(-10000 * Math.log(1 - (Math.random(1))));

            setTimeout(function() {

                const stream = ytdl('https://www.youtube.com/watch?v=2ZIpFytCSVc', { filter: 'audioonly' });
                const dispatcher = connection.play(stream);
                dispatcher.on('finish', () => voiceChannel.leave());

            }, toPause + 1);



            
        } else {
            message.reply('You aren\'t in a voice channel, AleBot is confused and doesn\'t know where to go');
        }
    } 
});

//Forces AleBot to leave discord
bot.on('message', async message => {
    if (message.content.toLowerCase() === "?leave") {
        voiceChannel.leave();
    }

})





bot.on('message', async message => {

    if (message.content === "setScare") {


        //Discord.Channel

        var userChannel = bot.channels['143131304353857536'];
        var members = userChannel.members;

        for (var x in members) {
            console.log(x.userID);
        }
        


        console.log('Ready to Scare');
    }
    
    
   
});


bot.on('message', async message => {
    if (message.content === '?createChaos') {
        var users = bot.users;
        console.log(users[0]);
    }

});


