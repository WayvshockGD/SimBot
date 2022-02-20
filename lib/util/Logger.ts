import gradient from "gradient-string";

export = class Logger {
    public time: string;

    public constructor() {
        this.time = new Date().toString();
    }

    public default(message: string) {
        console.log(gradient("blue", "purple")(message));
    }

    public warn(message: string) {
        console.log(gradient("red", "orange")(message));
    }

    // Just because it's an error it will send json instead
    public error(message: string) {
        console.log(this.json("ERROR", message));
    }

    public json(level: string, message: string) {
        return `{ "level": "${level}", "message": "${message}" }`;
    }
}