const fs = require('fs')
const chalk = require('chalk')

// const getNotes = () => {
//     return 'Your Notes...'
// }

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter((note) => note.title === title)
    const duplcateNote = notes.find((note) => notes.title === title)
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    if (!duplcateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New Note Added')
    } else {
        console.log('Title Taken')
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    // const notesToKeep = notes.filter(function (note) {
    //     return note.title !== title
    // })

    if (notes.length > notesToKeep.length) {
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse.bold('Note Removed!'))
    } else {
        console.log(chalk.red.inverse.bold('No Note Found!'))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse('YOUR NOTES'))
    notes.forEach(note => {
        console.log(note.title)
    });

}

const readNote = (title) => {
    // console.log(chalk.yellow.inverse("Note Title"))
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.yellow.inverse(note.title))
        console.log(chalk.yellow.inverse(note.body))
    } else {
        console.log(chalk.red.inverse("!!! NO NOTE FOUND !!!"))
    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}