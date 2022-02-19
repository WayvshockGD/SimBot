import { Command } from "../lib/structures/Command";

export = new Command("ping", {
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