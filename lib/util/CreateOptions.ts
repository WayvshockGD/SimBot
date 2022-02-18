import { ClientOptions } from "eris";

const options: ClientOptions = {
    intents: [
        "guilds",
        "guildMessages",
        "guildMembers",
        "guildMessageReactions"
    ],
    autoreconnect: true,
    restMode: true,
    defaultImageFormat: "svg"
}

export default function createDefaultOptions() {
    return options;
}