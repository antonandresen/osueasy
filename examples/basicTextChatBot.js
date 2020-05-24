const { OsueasyClient } = require('../lib');

// Bot command prefix
const PREFIX = '!';

// Init osueasy client with IRC credentials
const client = new OsueasyClient('AntoN', 'YOUR_IRC_PASSWORD');

// Init TextChatBot
const chatBot = client.createTextChatBot(PREFIX);

// Add commands
chatBot.addCommand('hello', 'wazzzzap');
chatBot.addCommand('tablet', 'Wacom Intuos Pro');
chatBot.addCommand('skin', 'https://skins.osuck.net/index.php?newsid=233');

// Start bot
chatBot
  .start()
  .then(() => {
    console.info('Chat bot started, now listening for commands...');
  })
  .catch((err) => console.error(err));
