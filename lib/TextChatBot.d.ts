export default class TextChatBot {
    private commandList;
    private prefix;
    private banchoClient;
    constructor(username: string, password: string, prefix: string);
    addCommand(name: string, response: string): void;
    start(): Promise<void>;
    private setupClient;
}
//# sourceMappingURL=TextChatBot.d.ts.map