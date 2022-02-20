import Eris from "eris";
import { isBeta } from "../lib/Beta";
import SimBot from "../lib/structures/Simbot";

export = async function(client: SimBot) {
    client.logger.default("Client is online");

    const commands = client.commands.map(({ id, description }) => ({
        description,
        name: id,
        type: Eris.Constants.ApplicationCommandTypes.CHAT_INPUT
    }));

    if (isBeta()) {
        await client.bulkEditGuildCommands(process.env.GUILD as string, commands);
    } else {
        await client.bulkEditCommands(commands);
    }
}