"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const eris_1 = __importDefault(require("eris"));
const CommandUtil_1 = __importDefault(require("../lib/util/CommandUtil"));
module.exports = async function (interaction, client) {
    const command = client.commands.get(interaction.data.name);
    if (!command) {
        return await interaction.createMessage({
            content: `Command ${interaction.data.name} doesn't exist`,
            flags: eris_1.default.Constants.MessageFlags.EPHEMERAL
        });
    }
    const guild = interaction.channel.guild;
    command.run(new CommandUtil_1.default(interaction), {
        message: interaction,
        args: [],
        guild,
        client
    });
};
