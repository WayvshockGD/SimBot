"use strict";
const eris_1 = require("eris");
const Command_1 = require("../structures/Command");
module.exports = class CommandCache extends eris_1.Collection {
    constructor() {
        super(Command_1.Command);
    }
    list() {
        const commands = [];
        const values = this.entries();
        for (const [id, data] of values) {
            commands.push(`\`${id.toString()}\` - ${data.description}`);
        }
        return commands;
    }
};
