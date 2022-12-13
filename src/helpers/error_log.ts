import fs from 'fs'

export const writeErrorLog = (data) => {
    const path =
        './src/logs/' +
        new Date().getDate() +
        '_' +
        (new Date().getMonth() + 1) +
        '_' +
        new Date().getFullYear() +
        '.txt'

    data =
        JSON.stringify(data) +
        '\n------------------------------------------ \n' +
        new Date().toUTCString()
    fs.appendFile(path, data, (err) => {
        if (err) console.log(err)
    })
}
