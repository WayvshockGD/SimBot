import { Client } from "eris";
import createDefaultOptions from "../util/CreateOptions";

export = class SimBot extends Client {
    public constructor() {
        super("", createDefaultOptions());
    }
}