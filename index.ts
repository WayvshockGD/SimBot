import { Command } from "./lib/structures/Command";
import SimBot from "./lib/structures/Simbot";
import Util from "./lib/util/Util";

const client = new SimBot();

(() => {
    for (const file of Util.loadFromDirectory("./commands/", "commands")) {
        const f = file as Command;
        client.commands.set(f.id, f);
    }
})