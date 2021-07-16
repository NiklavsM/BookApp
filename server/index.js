require('dotenv').config()
const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://"+ process.env.databaseName +":"+ process.env.databasePassword +"@cluster0.wn3kg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function run() {
    try {
        await client.connect();
        const database = client.db('bookApp');
        const questions = database.collection('users');
        const query = { googleId: '1' };
        //find document
        // const book = await books.findOne(query);
        // console.log(book);
        //update document
        // const book = await questions.updateOne(query, {$set: {field: "info"}})
        //add to array
        const book = await questions.updateOne(query, {$addToSet: {"stats.badges": "thisIsNew"}})
        console.log(book)
    } finally {
        await client.close();
    }
}
run().catch(console.dir);
