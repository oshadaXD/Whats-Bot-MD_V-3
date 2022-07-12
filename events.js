var Commands = [];
// const { v1: uuid } = require('uuid');

function addCommand(info, func) {

    var infos = {
        pattern: info['pattern'] === undefined || info['pattern'] === '' ? [] : info['pattern'], // Or Sudo
        fromMe: info['fromMe'] === undefined ? true : info['fromMe'], // Or Sudo
        onlyGroup: info['onlyGroup'] === undefined ? false : info['onlyGroup'],
        onlyPinned: info['onlyPinned'] === undefined ? false : info['onlyPinned'],
        onlyPm: info['onlyPm'] === undefined ? false : info['onlyPm'],
        deleteCommand: info['deleteCommand'] === undefined ? true : info['deleteCommand'],
        desc: info['desc'] === undefined ? '' : info['desc'],
        usage: info['usage'] === undefined ? '' : info['usage'],
        dontAddCommandList: info['dontAddCommandList'] === undefined ? false : info['dontAddCommandList'],
        warn: info['warn'] === undefined ? '' : info['warn'],
        function: func
    };

    Commands.push(infos);
    return infos;
}

module.exports = {
    addCommand: addCommand,
    commands: Commands
}
