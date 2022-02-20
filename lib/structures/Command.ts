import Eris from "eris";
import CommandUtil from "../util/CommandUtil";
import SimBot from "./Simbot";

export class Command {
    public id: string;

    public description: string;

    public dev: boolean | undefined;

    public run: CommandRunFunction;

    public constructor(id: string, options: CommandOptions) {
        this.id = id;

        this.description = options.description;

        this.dev = options.dev;

        this.run = options.exec;
    }
}

export interface CommandOptions {
    description: string;
    dev?: boolean;
    exec: CommandRunFunction;
}

export type CommandRunFunction = (util: CommandUtil, ctx: CommandCTX) => void;

export interface CommandCTX {
    message: Eris.Message | Eris.CommandInteraction;
    client: SimBot;
    args: string[];
    guild: Eris.Guild;
}