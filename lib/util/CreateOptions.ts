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
    defaultImageFormat: "jpeg"
}

export default function createDefaultOptions() {
    return options;
}