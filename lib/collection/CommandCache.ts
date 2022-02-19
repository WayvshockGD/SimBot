import { Collection } from "eris";
import { Command } from "../structures/Command";

export = class CommandCache extends Collection<Command> {
    public constructor() {
        super(Command);
    }

    public list(): string[] {
        const commands = [];
        const values = this.entries();

        for (const [id, data] of values) {
            commands.push(`\`${id.toString()}\` - ${data.description}`);
        }

        return commands;
    }
}