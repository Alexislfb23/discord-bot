const Discord = require("discord.js");
const { WebhookClient } = require('discord.js');
const { MessageEmbed } = require('discord.js');

const { Client, Intents } = require('discord.js');
const client = new Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "DIRECT_MESSAGES"
    ],
    partials: [
    "CHANNEL"
    ]
});

const webhookClient = new Discord.WebhookClient({id: process.env.IDWEBHOOK, token: process.env.TOKENWEBHOOK})

// Create a new client instanc


// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on("messageCreate", function(message) { 
    if(message.author.bot) return;

    const args = message.content
    .trim()
    .split(/ +/g);
    const cmd = args.shift().toLowerCase();

    const user = message.mentions.users.first();
    let mention = message.mentions.members.first();

    if(message.content.includes("!membres") && message.channelId == "857313632186400808"){
        let membersWithRole = message.guild.roles.cache.get('862448360627765309').members.size;
        let membersWithRoleForma = message.guild.roles.cache.get('862447811715006515').members.size;
        let membersWithRoleGer = message.guild.roles.cache.get('862447727332556800').members.size;
        message.channel.send('Composition de la Brigade Anti Crimininalité.');
        message.channel.send('Gérance BAC: ' + membersWithRoleGer);
        message.channel.send('Formateur BAC: ' + membersWithRoleForma);
        message.channel.send('Membres BAC: ' + membersWithRole);
    }


    if(message.content.includes("!upgrade") && message.channelId == "883802351570391040"){
        if ((!user === undefined) || args.length >= 0) {
 
            if(mention == undefined){
                message.reply("Erreur >> Commandes: -- !ads !gpx !sb !bg !bc !mjr !ltn !cne !cdt !cre -- suivi de la personne mentionné suivi de la date (04/09/2021).")
            }else if(args.length >= 2){
                if(mention.roles.cache.has('862445656660508712')) { // ADS -> GPX
                    message.reply("Vous venez de promouvoir " + args[0] + " en Gardien de la paix.");
                    mention.roles.add("862445986906636298")
                    mention.roles.add("862448638218600519")
                    mention.roles.remove("862445656660508712")
                    mention.roles.remove("862449447127482388")

                    const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://images-ext-1.discordapp.net/external/aThF59PdsxDTVEdV9KOE8yDB8HVJRjaZ1cBlgN4nqDs/https/images-ext-1.discordapp.net/external/fQsgv8BGC4JVyYtIxTEbFLT7j1c6Em4c2_Kyj_hGokI/https/i.postimg.cc/W4s4kXNq/GPX1.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Suite à la formation et une restitution des connaissances acquises, reçoit ses galons de Gardien de la paix :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                    message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });

                    webhookClient.send({
                        content: 'Promotion:',
                        username: 'Police Nationale',
                        avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                        embeds: [embed],
                    }); 
                }
                else if(mention.roles.cache.has('862445986906636298')) { // GPX -> SB
                    message.reply("Vous venez de promouvoir " + args[0] + " en Sous-Brigadier.");
                    mention.roles.add("862446141106814986")
                    mention.roles.add("862448638218600519")
                    mention.roles.remove("862445986906636298")

                    const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://images-ext-1.discordapp.net/external/PScDgWczURdxfzaP1fCFxflPgXI2tM0ohW5G_w80GGI/https/images-ext-2.discordapp.net/external/hPnDzsB4BJy9iED-hz6BCQDMBO1nsB7SjSG__hdp6b8/https/i.postimg.cc/8CyrkqRz/SB.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Suite à la formation et une restitution des connaissances acquises, reçoit ses galons de Sous-Brigadier :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                    message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });
                    webhookClient.send({
                        content: 'Promotion:',
                        username: 'Police Nationale',
                        avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                        embeds: [embed],
                    }); 
                }
                else if(mention.roles.cache.has('862446141106814986')) { // SB -> BG
                    message.reply("Vous venez de promouvoir " + args[0] + " en Brigadier.");
                    mention.roles.add("862446232835719198")
                    mention.roles.add("862448638218600519")
                    mention.roles.remove("862446141106814986")

                    const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://images-ext-1.discordapp.net/external/FRZwWgHIetkq-7D710KN6ND3c8ddvgPt_ARim0ygwfY/http/image.noelshack.com/fichiers/2021/34/7/1630249583-bg-titre.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Suite à la formation et une restitution des connaissances acquises, reçoit ses galons de Brigadier :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                    message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });

                    webhookClient.send({
                        content: 'Promotion:',
                        username: 'Police Nationale',
                        avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                        embeds: [embed],
                    }); 
                }
                else if(mention.roles.cache.has('862446232835719198')) { // BG -> BC
                    message.reply("Vous venez de promouvoir " + args[0] + " en Brigadier-Chef.");
                    mention.roles.add("862446277895651358")
                    mention.roles.add("862448638218600519")
                    mention.roles.remove("862446232835719198")

                    const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://images-ext-2.discordapp.net/external/yHJQ2U3-I31qmX4zGoA9sqIrH20qJQB4afWpZTgv7S0/https/images-ext-2.discordapp.net/external/lnsykYfxrYOEmdMK1-1Jc3G2Rb4AW-5OwSNol2ngGUI/https/i.postimg.cc/8PVsG12b/BC.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Suite à la formation et une restitution des connaissances acquises, reçoit ses galons de Brigadier-Chef :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                    message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });

                    webhookClient.send({
                        content: 'Promotion:',
                        username: 'Police Nationale',
                        avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                        embeds: [embed],
                    }); 
                }
                else if(mention.roles.cache.has('862446277895651358')) { // GPX -> SB
                    message.reply("Vous venez de promouvoir " + args[0] + " en Major.");
                    mention.roles.add("862446591834062868")
                    mention.roles.add("862448638218600519")
                    mention.roles.remove("862446277895651358")

                    const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://images-ext-1.discordapp.net/external/oHIpnUwHkYI1dSoqF0nNHq_drQQP9XZFxnH-ZtYXh7E/https/i.postimg.cc/RZSF3gV6/MJR.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Suite à la formation et une restitution des connaissances acquises, reçoit ses galons de Major :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                    message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });

                    webhookClient.send({
                        content: 'Promotion:',
                        username: 'Police Nationale',
                        avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                        embeds: [embed],
                    }); 
                }
                else if(mention.roles.cache.has('862446591834062868')) { // GPX -> SB
                    message.reply("Vous venez de promouvoir " + args[0] + " en Lieutenant.");
                    mention.roles.add("862446652048932874")
                    mention.roles.add("862449312834519110")
                    mention.roles.remove("862448638218600519")
                    mention.roles.remove("862446591834062868")

                    const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://images-ext-1.discordapp.net/external/ANw5ofGEmK7XDXEPnTudABVXgjBxvFbaKPsIZFyxUTA/https/i.postimg.cc/L8QHJRbw/LTN.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Suite à la formation et une restitution des connaissances acquises, reçoit ses galons de Lieutenant :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                    message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });

                    webhookClient.send({
                        content: 'Promotion:',
                        username: 'Police Nationale',
                        avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                        embeds: [embed],
                    }); 
                }
                else if(mention.roles.cache.has('862446652048932874')) { // GPX -> SB
                    message.reply("Vous venez de promouvoir " + args[0] + " en Capitaine.");
                    mention.roles.add("862446750598168626")
                    mention.roles.add("862449312834519110")
                    mention.roles.remove("862446652048932874")

                    const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://images-ext-2.discordapp.net/external/pbVhKexvBioQQoXXDUPtmflc5FI_LfsIXWMbh8_1SBI/https/i.postimg.cc/ZKTZjCkX/CNE.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Suite à la formation et une restitution des connaissances acquises, reçoit ses galons de Capitaine :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                    message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });

                    webhookClient.send({
                        content: 'Promotion:',
                        username: 'Police Nationale',
                        avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                        embeds: [embed],
                    }); 
                }
                else if(mention.roles.cache.has('862446750598168626')) { // GPX -> SB
                    message.reply("Vous venez de promouvoir " + args[0] + " en Commandant.");
                    mention.roles.add("862446797930364940")
                    mention.roles.add("862449312834519110")
                    mention.roles.remove("862446750598168626")

                    const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://cdn.discordapp.com/emojis/863564796354625576.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Suite à la formation et une restitution des connaissances acquises, reçoit ses galons de Commandant :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                     message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });

                     webhookClient.send({
                        content: 'Promotion:',
                        username: 'Police Nationale',
                        avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                        embeds: [embed],
                    }); 
                }
            }
        }
    }

    

    /////////////////////////////// ADS //////////////////////////
    if(message.content.includes("!ads")){
        if ((!user === undefined) || args.length >= 1) {
            if(message.channelId == "867030506637623316" || message.channelId == "883802351570391040") {
                if(mention == undefined){
                    message.reply("Erreur >> Commandes: -- !ads !gpx !sb !bg !bc !mjr !ltn !cne !cdt !cre -- suivi de la personne mentionné.")
                }else{
                    mention.roles.add("862445656660508712")
                    mention.roles.add("862449447127482388")
                    message.reply("Vous venez de promouvoir " + args[0] + " en Adjoint de sécurité.")
                    message.guild.channels.cache.get("857308620961087518").send(":military_medal: Bienvenue à " + args[0] + " qui rejoint nos rangs au seins de la Police Nationale au grade d'Adjoint de sécurité, félicitation à vous. :military_medal:")
                }
            }

        }
    }

    ///////////////////////////// GPX ////////////////////////////
    if(message.content.includes("!gpx") && message.channelId == "883802351570391040"){
        if ((!user === undefined) || args.length >= 0) {
 
            if(mention == undefined || args[1] == undefined){
                message.reply("Erreur >> Commandes: -- !ads !gpx !sb !bg !bc !mjr !ltn !cne !cdt !cre -- suivi de la personne mentionné suivi de la date (04/09/2021).")
            }else if(args.length >= 2){
                mention.roles.add("862445986906636298")
                mention.roles.add("862448638218600519")
                message.reply("Vous venez de promouvoir " + args[0] + " en Gardien de la paix.");
                const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://images-ext-1.discordapp.net/external/aThF59PdsxDTVEdV9KOE8yDB8HVJRjaZ1cBlgN4nqDs/https/images-ext-1.discordapp.net/external/fQsgv8BGC4JVyYtIxTEbFLT7j1c6Em4c2_Kyj_hGokI/https/i.postimg.cc/W4s4kXNq/GPX1.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Pour des raisons qui resteront confidentielles, reçoit ses galons de Gardien de la paix :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });
                webhookClient.send({
                    content: 'Promotion:',
                    username: 'Police Nationale',
                    avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                    embeds: [embed],
                }); 
            }
        }
    }

    /////////////////////////// SB ////////////////////////////
    if(message.content.includes("!sb") && message.channelId == "883802351570391040"){
        if ((!user === undefined) || args.length >= 0) {
 
            if(mention == undefined){
                message.reply("Erreur >> Commandes: -- !ads !gpx !sb !bg !bc !mjr !ltn !cne !cdt !cre -- suivi de la personne mentionné.")
            }else if(args.length >= 1){
                mention.roles.add("862446141106814986")
                mention.roles.add("862448638218600519")
                message.reply("Vous venez de promouvoir " + args[0] + " en Sous-Brigadier.")
                const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://images-ext-1.discordapp.net/external/PScDgWczURdxfzaP1fCFxflPgXI2tM0ohW5G_w80GGI/https/images-ext-2.discordapp.net/external/hPnDzsB4BJy9iED-hz6BCQDMBO1nsB7SjSG__hdp6b8/https/i.postimg.cc/8CyrkqRz/SB.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Suite à la formation et une restitution des connaissances acquises, reçoit ses galons de Sous-Brigadier :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });
                webhookClient.send({
                    content: 'Promotion:',
                    username: 'Police Nationale',
                    avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                    embeds: [embed],
                }); 
            }
        }
    }

    ////////////////////////////// BG /////////////////////////
    if(message.content.includes("!bg") && message.channelId == "883802351570391040"){
        if ((!user === undefined) || args.length >= 0) {
 
            if(mention == undefined){
                message.reply("Erreur >> Commandes: -- !ads !gpx !sb !bg !bc !mjr !ltn !cne !cdt !cre -- suivi de la personne mentionné.")
            }else if(args.length >= 1){
                mention.roles.add("862446232835719198")
                mention.roles.add("862448638218600519")
                message.reply("Vous venez de promouvoir " + args[0] + " en Brigadier.")
                const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://images-ext-1.discordapp.net/external/FRZwWgHIetkq-7D710KN6ND3c8ddvgPt_ARim0ygwfY/http/image.noelshack.com/fichiers/2021/34/7/1630249583-bg-titre.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Pour des raisons qui resteront confidentielles, reçoit ses galons de Brigadier :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });
                webhookClient.send({
                    content: 'Promotion:',
                    username: 'Police Nationale',
                    avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                    embeds: [embed],
                }); 
            }
        }
    }

    ////////////////////////// BC //////////////////////////////
    if(message.content.includes("!bc") && message.channelId == "883802351570391040"){
        if ((!user === undefined) || args.length >= 0) {
 
            if(mention == undefined){
                message.reply("Erreur >> Commandes: -- !ads !gpx !sb !bg !bc !mjr !ltn !cne !cdt !cre -- suivi de la personne mentionné.")
            }else if(args.length >= 1){
                mention.roles.add("862446277895651358")
                mention.roles.add("862448638218600519")
                message.reply("Vous venez de promouvoir " + args[0] + " en Brigadier-Chef.")
                const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://images-ext-2.discordapp.net/external/yHJQ2U3-I31qmX4zGoA9sqIrH20qJQB4afWpZTgv7S0/https/images-ext-2.discordapp.net/external/lnsykYfxrYOEmdMK1-1Jc3G2Rb4AW-5OwSNol2ngGUI/https/i.postimg.cc/8PVsG12b/BC.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Pour des raisons qui resteront confidentielles, reçoit ses galons de Brigadier-Chef :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });
                webhookClient.send({
                    content: 'Promotion:',
                    username: 'Police Nationale',
                    avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                    embeds: [embed],
                }); 
            }
        }
    }

    //////////////////////////// MJR /////////////////////////////
    if(message.content.includes("!mjr") && message.channelId == "883802351570391040"){
        if ((!user === undefined) || args.length >= 0) {
 
            if(mention == undefined){
                message.reply("Erreur >> Commandes: -- !ads !gpx !sb !bg !bc !mjr !ltn !cne !cdt !cre -- suivi de la personne mentionné.")
            }else if(args.length >= 1){
                mention.roles.add("862446591834062868")
                mention.roles.add("862448638218600519")
                message.reply("Vous venez de promouvoir " + args[0] + " en Major.")
                const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://images-ext-1.discordapp.net/external/oHIpnUwHkYI1dSoqF0nNHq_drQQP9XZFxnH-ZtYXh7E/https/i.postimg.cc/RZSF3gV6/MJR.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Pour des raisons qui resteront confidentielles, reçoit ses galons de Major :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });
                webhookClient.send({
                    content: 'Promotion:',
                    username: 'Police Nationale',
                    avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                    embeds: [embed],
                }); 
            }
        }
    }

    ////////////////////////// LTN ///////////////////////////////
    if(message.content.includes("!ltn") && message.channelId == "883802351570391040"){
        if ((!user === undefined) || args.length >= 0) {
 
            if(mention == undefined){
                message.reply("Erreur >> Commandes: -- !ads !gpx !sb !bg !bc !mjr !ltn !cne !cdt !cre -- suivi de la personne mentionné.")
            }else if(args.length >= 1){
                mention.roles.add("862446652048932874")
                mention.roles.add("862449312834519110")
                message.reply("Vous venez de promouvoir " + args[0] + " en Lieutenant.")
                const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://images-ext-1.discordapp.net/external/ANw5ofGEmK7XDXEPnTudABVXgjBxvFbaKPsIZFyxUTA/https/i.postimg.cc/L8QHJRbw/LTN.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Pour des raisons qui resteront confidentielles, reçoit ses galons de Lieutenant :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });
                webhookClient.send({
                    content: 'Promotion:',
                    username: 'Police Nationale',
                    avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                    embeds: [embed],
                }); 
            }
        }
    }

    ////////////////////////////// CNE //////////////////////////
    if(message.content.includes("!cne") && message.channelId == "883802351570391040"){
        if ((!user === undefined) || args.length >= 0) {
 
            if(mention == undefined){
                message.reply("Erreur >> Commandes: -- !ads !gpx !sb !bg !bc !mjr !ltn !cne !cdt !cre -- suivi de la personne mentionné.")
            }else if(args.length >= 1){
                mention.roles.add("862446750598168626")
                mention.roles.add("862449312834519110")
                message.reply("Vous venez de promouvoir " + args[0] + " en Capitaine.")
                const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://images-ext-2.discordapp.net/external/pbVhKexvBioQQoXXDUPtmflc5FI_LfsIXWMbh8_1SBI/https/i.postimg.cc/ZKTZjCkX/CNE.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Pour des raisons qui resteront confidentielles, reçoit ses galons de Capitaine :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });
                webhookClient.send({
                    content: 'Promotion:',
                    username: 'Police Nationale',
                    avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                    embeds: [embed],
                }); 
            }
        }
    }

    /////////////////////////////// CDT ///////////////////////////////
    if(message.content.includes("!cdt") && message.channelId == "883802351570391040"){
        if ((!user === undefined) || args.length >= 0) {
 
            if(mention == undefined){
                message.reply("Erreur >> Commandes: -- !ads !gpx !sb !bg !bc !mjr !ltn !cne !cdt !cre -- suivi de la personne mentionné.")
            }else if(args.length >= 1){
                mention.roles.add("862446797930364940")
                mention.roles.add("862449312834519110")
                message.reply("Vous venez de promouvoir " + args[0] + " en Commandant.")
                const embed = new MessageEmbed()
                    .setColor('#0099ff')
                    .setThumbnail('https://cdn.discordapp.com/emojis/863564796354625576.png')
                    .addFields(
                        { name: ':star: Décret du ' + args[1] + ' portant sur la nomination d un policier', value: 'Pour des raisons qui resteront confidentielles, reçoit ses galons de Commandant :' },
                        { name: '----------------------------------------------', value: args[0] + "." },
                        { name: '----------------------------------------------', value: 'Félicitation à vous, bonne continuation et bon courage pour le reste de votre carrière'},
                    )
                    .setFooter('LEtat Major de la Police Nationale', '');
                message.guild.channels.cache.get("857307937403961374").send({ embeds: [embed] });
                webhookClient.send({
                    content: 'Promotion:',
                    username: 'Police Nationale',
                    avatarURL: 'https://www.picclickimg.com/d/l400/pict/313426230039_/%C3%A9cusson-Police-Nationale-blanc-PVC-nouveau-logo-2021.jpg',
                    embeds: [embed],
                }); 
            }
        }
    }

    /////////////////////////////// CRE ////////////////////////////////
    if(message.content.includes("!cre") && message.channelId == "883802351570391040"){
        if ((!user === undefined) || args.length >= 0) {
 
            if(mention == undefined){
                message.reply("Erreur >> Commandes: -- !ads !gpx !sb !bg !bc !mjr !ltn !cne !cdt !cre -- suivi de la personne mentionné.")
            }else if(args.length >= 1){
                mention.roles.add("862446849118044181")
                mention.roles.add("862447087219900427")
                message.reply("Vous venez de promouvoir " + args[0] + " en Commissaire.")
            }
        }
    }
});


// Login to Discord with your client's token
client.login(process.env.TOKEN);