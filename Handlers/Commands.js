const {Perms} = require('../Structures/Validation/Permissions');
const {Client} = require('discord.js');
const ms = require('ms')
/**
 * @param {Client} client 
 */
module.exports = async (client, PG, Ascii) => {
    const Table = new Ascii("Command Loaded");

    CommandsArray = [];
    //console.log(CommandsArray);
    (await PG(`${process.cwd()}/Commands/*/*.js`)).map(async(file) => {
        const command = require(file);
        if(!command.name)
        return Table.addRow(file.split("/")[7], "⚠️ ERROR", "Missing a name")

        if (command.type !== "USER" && !command.description) 
        return Table.addRow(command.name, "⚠️ ERROR", "missing a description.");
        

        if(command.permission){
            if(Perms.includes(command.permission))
            command.defaultPermission = false;
            else return Table.addRow(command.name, "⚠️ERROR", "Permission is invalid")
        }

        client.commands.set(command.name, command);
        CommandsArray.push(command);
        await Table.addRow(command.name, "SUCCESSFUL")
    });

    

    console.log(Table.toString())

    client.on('ready', () =>{
            /* client.guilds.cache.forEach(guilds => {
                guilds.commands.set(CommandsArray)

            })*/
            client.guilds.cache.get('1013800837220405289').commands.set(CommandsArray)
            
        }, 
    )
    }