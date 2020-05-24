import { BanchoClient } from 'bancho.js';
import TextChatBot from './TextChatBot';

export default class OsueasyClient {
  private banchoClient: BanchoClient;

  constructor(username: string, password: string) {
    this.banchoClient = new BanchoClient({ username, password });
  }

  createTextChatBot(prefix: string): TextChatBot {
    return new TextChatBot(this.banchoClient, prefix);
  }
}
