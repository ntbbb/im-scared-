import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Replies with Pong',

    callback: ({ message }) => {
        message.reply('pong')
    }
} as ICommand