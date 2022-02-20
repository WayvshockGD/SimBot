import Eris, { CommandInteraction } from "eris";
import SimBot from "../lib/structures/Simbot";
import CommandUtil from "../lib/util/CommandUtil";

export = async function(interaction: CommandInteraction, client: SimBot) {
    const command = client.commands.get(interaction.data.name);

    if (!command) {
        return await interaction.createMessage({
            content: `Command ${interaction.data.name} doesn't exist`,
            flags: Eris.Constants.MessageFlags.EPHEMERAL
        });
    }

    const guild = (<Eris.GuildChannel>interaction.channel).guild;

    command.run(new CommandUtil(interaction), {
        message: interaction,
        args: [],
        guild,
        client
    })
}