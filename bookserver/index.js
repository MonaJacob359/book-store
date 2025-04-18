

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config(); // Load .env variables

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const port = process.env.PORT || 8080;
const uri = process.env.MONGODBURL;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection Setup
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

// Connect to MongoDB once globally
client.connect()
    .then(() => console.log(" MongoDB Connected Successfully!"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

const bookCollections = client.db("BookInventory").collection("Books");

// API Routes
app.get('/', (req, res) => {
    res.send(`<h1 style="color:blue; 
            display: flex;
            justify-content: center; 
            align-items: center; 
            height: 100vh;
            font-size:30px
        ">📚 APIS BOOKS RUNNING!</h1>`);
});



//  Insert a new book (POST)
app.post("/upload-book", async (req, res) => {
    const data = req.body;
    const result = await bookCollections.insertOne(data);
    res.send(result);
});

//  Get all books or filter by category (GET)
app.get("/all-books", async (req, res) => {
    let query = {};
    if (req.query?.category) {
        query = { category: req.query.category };
    }
    const result = await bookCollections.find(query).toArray();
    res.send(result);
});

//  Update a book (PATCH)
app.patch("/book/:id", async (req, res) => {
    const id = req.params.id;
    const updateBookData = req.body;
    const filter = { _id: new ObjectId(id) };
    const updatedDoc = { $set: { ...updateBookData } };
    const options = { upsert: true };

    const result = await bookCollections.updateOne(filter, updatedDoc, options);
    res.send(result);
});

//  Delete a book (DELETE)
app.delete("/book/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await bookCollections.deleteOne(filter);
    res.send(result);
});

//  Get a single book by ID (GET)
app.get("/book/:id", async (req, res) => {
    const id = req.params.id;
    const filter = { _id: new ObjectId(id) };
    const result = await bookCollections.findOne(filter);
    res.send(result);
});

// Start Server
app.listen(port, () => {
    console.log(` Server running on port ${port}`);
});
