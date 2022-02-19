import Eris, { MessageContent } from "eris";

export = class CommandUtil {
    private container: Eris.Message | Eris.CommandInteraction;

    public constructor(message: Eris.Message | Eris.CommandInteraction) {
        this.container = message;
    }
    
    public async respond(content: MessageContent) {
        if (this.container instanceof Eris.CommandInteraction) {
            await this.container.createMessage(content);
            await this.container.getOriginalMessage();
        } else {
            return await this.container.channel.createMessage(content);
        }
    }

    public async respondAndEdit(content: MessageContent, editContent: MessageContent) {
        if (this.container instanceof Eris.CommandInteraction) {
            await this.respond(content);
            return await this.container.editOriginalMessage(editContent);
        } else {
            const msg = await this.respond(content);
            if (msg) {
                msg.edit(editContent);
            }
        }
    }
}