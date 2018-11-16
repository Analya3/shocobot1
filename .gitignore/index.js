const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("<")

bot.on('ready', function() {
    bot.user.setGame("Crow Four Kingdoms");
    console.log("Connecté");
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes: \n -<help \n -<dodo \n -<abs \n -<re \n -<nrv \n -<ban \n -<kick \n Les minuscules et majuscule sont important et n'oublier de mettre '<' avant une commande quand c'est indiqué");
    }

    if (message.content === "Salut"){
        message.reply("Coucou :)");
        console.log("Commande Salut effectué");
    }

    if (message.content === "<nrv"){
        message.reply("est enervé, planquez vous ça va faire mal !")
    }

    if (message.content === "<dodo"){
        message.reply("va dormir (ou autre :$), bonne nuit !")
    }

    if (message.content === "<abs"){
        message.reply("sera indisponible, oublie pas de faire <re pour prévenir de ton retour :)")
    }

    if (message.content === "<re"){
        message.reply("est de retour, je t'ai manqué ? c:")
    }

    if (message.content === "touch"){
        message.channel.send("Ça t'amuse de me toucher ? Sale pervers...")
    }

    if (message.content === "Ako"){
        message.channel.send("Déjà c'est Master Ako ;)")
    }

    if (message.content === "Ah"){
        message.channel.send("Brutie?")
    }

    if (message.content === "ah"){
        message.channel.send("Brutie?")
    }

    if (message.content === "Bye"){
        message.reply("s'en va, à plus tard")
    }

    if (message.content === "Davi"){
        message.channel.send("Parle pas de lui j'ai mal aux yeux")
    }

    if (message.content === "Roger"){
        message.channel.send("Oh ouii y'a Roro ! send nude ? :3")
    }

    if (message.content === "Sieg"){
        message.channel.send("L'homme aux femmes, un vrai don juan, il a plus de meuf que de doigts")
    }

    if (message.content === "Just a boy"){
        message.channel.send("Déjà c'est quoi ce pseudo? En plus c'est un américain qui envoie des nudes à tout le monde, méfiez vous de lui.")
    }

    if (message.content === "Satan"){
        message.channel.send("Golf It or not Golf It, that is the question !")
    }
});

var prefix = ("<")



bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "bienvenue").send(`Bienvenue ${member} bby, fait gaffe aux joueurs du serveur sont bizarre.. Pense a demander ta couleur de pseudo dans la channel spécifique`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name","général").send(`${member} est mort dans son périple.`)
})

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Joueur');
    member.addRole(role)
})


var prefix = ("<")

    bot.on('message', message => {
        let command = message.content.split(" ")[0];
        const args = message.content.slice(prefix.length).split(/ +/);
        command = args.shift().toLowerCase();

        if (command === "kick") {
            let modRole = message.guild.roles.find("name", "Administrateur");
            if(!message.member.roles.has(modRole.id)) {
                return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
            }
            if(message.mentions.users.size === 0) {
                return message.reply("Oui mais qui?").catch(console.error);
            }
            let kickMember = message.guild.member(message.mentions.users.first());
            if(!kickMember) {
                return message.reply("Cet utilisateur est introuvable ou impossible à expulser.")
            }
            if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
                return message.reply("Je n'ai pas la permission KICK_MEMBERS pour faire ceci.").catch(console);
            }
            kickMember.kick().then(member => {
                message.reply(`${member.user.username} a été expulsé sans problème.`).catch(console.error);
                message.guild.channels.find("name", "général").send(`**${member.user.username}** a été dégagé du discord par **${message.author.username}**`)
            }).catch(console.error)
        }

        if (command === "ban") {
            let modRole = message.guild.roles.find("name", "Administrateur");
            if(!message.member.roles.has(modRole.id)) {
                return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
            }
            const member = message.mentions.members.first();
            if (!member) return message.reply("Comme pour kick, faut me dire qui. T'es américain pour oublier aussi vite ?");
            member.ban().then(member => {
                message.reply(`${member.user.username} a été exilé.`).catch(console.error);
                message.guild.channels.find("name", "général").send(`**${member.user.username}** a été banni du discord par **${message.author.username}**`)
            }).catch(console.error)
        }})
