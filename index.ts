import Ready from "./events/Ready";
import { Command } from "./lib/structures/Command";
import SimBot from "./lib/structures/Simbot";
import Util from "./lib/util/Util";

const client = new SimBot();

(async () => {
    for (const file of Util.loadFromDirectory("./out/commands/", "../commands")) {
        const f = file as Command;
        client.commands.set(f.id, f);
    }
    await client.connect()
       .catch(() => client.logger.error("Couldn't connect to gateway"));
})();

client.on("ready", () => Ready(client));