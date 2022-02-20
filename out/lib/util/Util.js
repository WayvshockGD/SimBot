"use strict";
const fs_1 = require("fs");
module.exports = class Util {
    static loadFromDirectory(base, dir) {
        const fileCache = [];
        const files = (0, fs_1.readdirSync)(base);
        for (const file of files) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const f = require(`../${dir}/${file}`);
            fileCache.push(f);
        }
        return fileCache;
    }
};
