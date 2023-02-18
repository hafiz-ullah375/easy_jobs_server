const express = require("express")
const app = express()
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config()
const port = process.env.PORT || 4000;
// middleware
app.use(cors())
app.use(express.json())
// mongodb connection


// const uri = `mongodb+srv://${process.env.EASY_JOBS}:${process.env.EASY_PASSWORD}@cluster0.0vygy0s.mongodb.net/?retryWrites=true&w=majority`;
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// console.log(uri);

const uri = `mongodb+srv://${process.env.EASY_JOBS}:${process.env.EASY_PASSWORD}@cluster0.bytxh.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri);

function run() {
    try {
        const categoryCollection = client.db('easyJobs').collection('categories')


        app.get('/categories', async (req, res) => {
            const query = {}
            const result = await categoryCollection.find(query).toArray()
            res.send(result)
        })
        app.get('/itemByCategory/:brand', async (req, res) => {
            const brand = req.params.brand;
            const query = { brand: brand };
            // const query = {}
            const result = await itemCollection.find(query).toArray();
            res.send(result)
        })

    }
    finally {

    }
}
run()


app.get('/', (req, res) => {

    res.send('server running')
})
app.listen(port, () => {

    console.log(`server port runtun ${port}`);
})