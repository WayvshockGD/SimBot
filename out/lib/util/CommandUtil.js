"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const eris_1 = __importDefault(require("eris"));
module.exports = class CommandUtil {
    container;
    constructor(message) {
        this.container = message;
    }
    async respond(content) {
        if (this.container instanceof eris_1.default.CommandInteraction) {
            await this.container.createMessage(content);
            await this.container.getOriginalMessage();
        }
        else {
            return await this.container.channel.createMessage(content);
        }
    }
    async respondAndEdit(content, editContent) {
        if (this.container instanceof eris_1.default.CommandInteraction) {
            await this.respond(content);
            return await this.container.editOriginalMessage(editContent);
        }
        else {
            const msg = await this.respond(content);
            if (msg) {
                msg.edit(editContent);
            }
        }
    }
};
