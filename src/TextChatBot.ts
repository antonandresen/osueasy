import { BanchoClient } from 'bancho.js';

export default class TextChatBot {
  private commandList: Map<string, string>;
  private prefix: string;
  private banchoClient: BanchoClient;

  constructor(username: string, password: string, prefix: string) {
    this.commandList = new Map<string, string>();
    this.prefix = prefix;
    this.banchoClient = new BanchoClient({
      username,
      password,
    });
  }

  public addCommand(name: string, response: string): void {
    this.commandList.set(name, response);
  }

  public async start(): Promise<void> {
    this.setupClient();
  }

  private async setupClient(): Promise<void> {
    await this.banchoClient.connect();

    // Subscribe to PM event.
    this.banchoClient.on('PM', async ({ message, user }) => {
      // Disregard messages without command prefix.
      if (!message.startsWith(this.prefix)) return;

      // Disregard messages from ourselves.
      if (user.ircUsername === this.banchoClient.getSelf().ircUsername) return;

      const args = message.slice(this.prefix.length).split(/ +/);
      const command = args.shift()!.toLowerCase();

      // Disregard commands that dont exist.
      if (!this.commandList.has(command)) return;

      // Successfull command, send response.
      const commandResponse = this.commandList.get(command);
      user.sendMessage(commandResponse!);
    });
  }
}
