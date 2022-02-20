"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const eris_1 = __importDefault(require("eris"));
const Beta_1 = require("../lib/Beta");
module.exports = async function (client) {
    client.logger.default("Client is online");
    const commands = client.commands.map(({ id, description }) => ({
        description,
        name: id,
        type: eris_1.default.Constants.ApplicationCommandTypes.CHAT_INPUT
    }));
    if ((0, Beta_1.isBeta)()) {
        await client.bulkEditGuildCommands(process.env.GUILD, commands);
    }
    else {
        await client.bulkEditCommands(commands);
    }
};
