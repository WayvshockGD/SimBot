"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const eris_1 = require("eris");
const Beta_1 = require("../Beta");
const CommandCache_1 = __importDefault(require("../collection/CommandCache"));
const CreateOptions_1 = __importDefault(require("../util/CreateOptions"));
const Logger_1 = __importDefault(require("../util/Logger"));
module.exports = class SimBot extends eris_1.Client {
    logger;
    commands;
    constructor() {
        super((0, Beta_1.getToken)(), (0, CreateOptions_1.default)());
        this.logger = new Logger_1.default();
        this.commands = new CommandCache_1.default();
    }
};
