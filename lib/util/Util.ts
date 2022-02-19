import { readdirSync } from "fs";

export = class Util {
    public static loadFromDirectory(base: string, dir: string) {
        const fileCache = [];

        const files = readdirSync(base);
        for (const file of files) {
            // eslint-disable-next-line @typescript-eslint/no-var-requires
            const f = require(`../${dir}/${file}`);
            fileCache.push(f);
        }

        return fileCache;
    }
}