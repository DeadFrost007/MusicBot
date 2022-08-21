module.exports = {
    TOKEN: "ODQ0NTMwNjc1NzcxNzY4ODUy.GV2Yxa.BDBAWxuyvY49Jb8DJfAOxAeFbUIYsbyQlA4DMY",
    ownerID: "370195417360629770", //write your discord user id.
    botInvite: "", //write your discord bot invite.
    status: 'Gangster Jatt As Phuck',
    commandsDir: './commands', //Please don't touch

    opt: {
        DJ: {
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //Please don't touch
        },

        voiceConfig: {
            leaveOnEnd: false, //If this variable is "true", the bot will leave the channel the music ends.
            autoSelfDeaf: true, //IF YOU WANT TO DEAF THE BOT, set false to true.

            leaveOnTimer: { //The leaveOnEnd variable must be "false" to use this system.
                status: true, //If this variable is "true", the bot will leave the channel when the bot is offline.
                time: 20000, //1000 = 1 second
            }
        },

        maxVol: 100, //You can specify the maximum volume level.
        loopMessage: false,

        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //Please don't touch
                highWaterMark: 1 << 25 //Please don't touch
            }
        }
    }
}
