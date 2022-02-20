"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options = {
    intents: [
        "guilds",
        "guildMessages",
        "guildMembers",
        "guildMessageReactions"
    ],
    autoreconnect: true,
    restMode: true,
    defaultImageFormat: "jpeg"
};
function createDefaultOptions() {
    return options;
}
exports.default = createDefaultOptions;
