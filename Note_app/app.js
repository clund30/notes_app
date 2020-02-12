const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const notes = require('./notes.js');

yargs.version('1.1.0')
// console.log(process.argv);

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
        // console.log(chalk.blue('Title: '), argv.title);
        // console.log(chalk.blue('Body: '), argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
        // console.log(chalk.red('Removing a new note'));
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing out all the notes',
    handler: function () {
        console.log(chalk.magenta('Listing out Notes'));
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log(chalk.yellow('Reading notes'));
    }
})

console.log(yargs.argv);
