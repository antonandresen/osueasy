import { BanchoClient } from 'bancho.js';
export default class TextChatBot {
    private commandList;
    private prefix;
    private banchoClient;
    constructor(banchoClient: BanchoClient, prefix: string);
    addCommand(name: string, response: string): void;
    start(): Promise<void>;
    private setupClient;
}
//# sourceMappingURL=TextChatBot.d.ts.map