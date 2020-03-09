const Discord = require('discord.js');
const { exec } = require('child_process');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {

    if (message.content === 'checkra1n') {

        message.channel.send('let it ra1n');

        var spawn = require('child_process').spawn,
        ls    = spawn('checkra1n', ['-v', '-V', '-c']);

        ls.stderr.on('data', function (data) {
        
            message.channel.send(`\`${data.toString()}\``)

        });

        ls.on('exit', function (code) {
        console.log('child process exited with code ' + code.toString());
        });
       


    }
    
    
});


client.login('token');
