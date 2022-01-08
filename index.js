const Discord = require('discord.js');
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const fs = require('fs');


const token = '#####################################';

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

//Plays poor quality clip
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

//Confusion Function
bot.on('message', async message => {
    if (message.content.toLowerCase() === "im confused") {
        const voiceChannel = message.member.voice.channel;
        if (voiceChannel) {
            const connection = await message.member.voice.channel.join();
            const stream = ytdl('https://www.youtube.com/watch?v=yGQoZDiWkwE', { filter: 'audioonly' });
            const dispatcher = connection.play(stream);
            dispatcher.on('finish', () => voiceChannel.leave());
        }
    }
});


//Forces AleBot to leave discord
bot.on('message', async message => {
    if (message.content.toLowerCase() === "?leave") {
        const voiceChannel = message.member.voice.channel;
        voiceChannel.leave();
    }

})




//Currenly non-functional
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
    if (!message.guild) {
        return;
    }

    guild = message.guild;

    if (message.content.toLowerCase().includes("?setrole")) {
        const user = message.guild.members.cache.get();
       

        console.log("Test");

        var splitArr = message.content.split(" ");
        if (splitArr.length !== 3) {
            console.log("Invalid setRole syntax");
            return;
        }
        var name = splitArr[1];
        var color = splitArr[2];

        const newRole = guild.roles.create({
            data: {
                name: name,
                color: color,
            },
            reason: "AleBot has spoken",
        })
        .then(console.log)
            .catch(console.error);

        var role = message.guild.roles.find(role => role.name === name);

        message.member.addRole(role);
        
    }

})

