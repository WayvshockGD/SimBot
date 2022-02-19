import { Client } from "eris";
import { getToken } from "../Beta";
import CommandCache from "../collection/CommandCache";
import createDefaultOptions from "../util/CreateOptions";

export = class SimBot extends Client {
    public commands: CommandCache;

    public constructor() {
        super(getToken(), createDefaultOptions());

        this.commands = new CommandCache();
    }
}