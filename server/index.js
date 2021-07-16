require('dotenv').config()
const {MongoClient} = require("mongodb");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, () => {
    console.log("Listening")
})

const uri = "mongodb+srv://" + process.env.databaseName + ":" + process.env.databasePassword + "@cluster0.wn3kg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(client => {
    const db = client.db('bookApp')
    const questionsCollection = db.collection('users');

    app.post('/question', (req, res) => {
        console.log("HERE")
        questionsCollection.insertOne(req.body)
            .then(result => {
                console.log(result)
            })
            .catch(error => console.error(error))
    })


})

// async function run() {
//     try {
//         await client.connect().then(client => {
//
//         });
//         const database = client.db('bookApp');
//         const questions = database.collection('users');
//         const query = { googleId: '1' };
//         //find document
//         // const book = await books.findOne(query);
//         // console.log(book);
//         //update document
//         // const book = await questions.updateOne(query, {$set: {field: "info"}})
//         //add to array
//         const book = await questions.updateOne(query, {$addToSet: {"stats.badges": "thisIsNew"}})
//         // console.log(book)
//     } finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);
