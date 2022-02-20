import { Client } from "eris";
import { getToken } from "../Beta";
import CommandCache from "../collection/CommandCache";
import createDefaultOptions from "../util/CreateOptions";
import Logger from "../util/Logger";

export = class SimBot extends Client {
    public logger: Logger;
    public commands: CommandCache;

    public constructor() {
        super(getToken(), createDefaultOptions());

        this.logger = new Logger();

        this.commands = new CommandCache();
    }
}