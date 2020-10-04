const lowdb = require('lowdb');
const FileAsync = require('lowdb/adapters/FileAsync')

let db;

 async function createConnection(){
    const adapter = await new FileAsync('db.json');
    db = await lowdb(adapter) 
    db.defaults({tasks: []}).write()
    console.log('connect to db')
}

const getConnection = () => {
    return db;
}

module.exports = {
    createConnection,
    getConnection
}