"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
class Command {
    id;
    description;
    dev;
    run;
    constructor(id, options) {
        this.id = id;
        this.description = options.description;
        this.dev = options.dev;
        this.run = options.exec;
    }
}
exports.Command = Command;
