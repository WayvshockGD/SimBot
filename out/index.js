"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const eris_1 = __importDefault(require("eris"));
const InteractionCreate_1 = __importDefault(require("./events/InteractionCreate"));
const Ready_1 = __importDefault(require("./events/Ready"));
const Simbot_1 = __importDefault(require("./lib/structures/Simbot"));
const Util_1 = __importDefault(require("./lib/util/Util"));
const client = new Simbot_1.default();
(async () => {
    for (const file of Util_1.default.loadFromDirectory("./out/commands/", "../commands")) {
        const f = file;
        client.commands.set(f.id, f);
    }
    await client.connect()
        .catch(() => client.logger.error("Couldn't connect to gateway"));
})();
client.on("ready", () => (0, Ready_1.default)(client));
client.on("interactionCreate", (interaction) => {
    if (interaction.type !== eris_1.default.Constants.InteractionTypes.APPLICATION_COMMAND) {
        return;
    }
    if (interaction instanceof eris_1.default.UnknownInteraction) {
        return;
    }
    (0, InteractionCreate_1.default)(interaction, client);
});
