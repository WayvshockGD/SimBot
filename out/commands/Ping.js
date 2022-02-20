"use strict";
const Command_1 = require("../lib/structures/Command");
module.exports = new Command_1.Command("ping", {
    description: "Pings the client and shows shard ping.",
    async exec(util, { guild }) {
        let ping = guild ? guild.shard.latency === Infinity
            ? Date.now()
            : guild.shard.latency
            : Date.now();
        if (guild && guild.shard.latency === Infinity) {
            ping = (Date.now() - ping);
        }
        util.respondAndEdit("Ping?", `Pong! \`${ping}\``);
    }
});
