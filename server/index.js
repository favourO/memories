import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import dotenv from "dotenv";
import connectDB from './config/connectDB.js'
import posts from './routes/posts.js'

// load dotenv
dotenv.config({ path: './config/config.env'})

// load route files

const app = express();


app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', posts);

// connect DB
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}, on ${process.env.NODE_ENV}!`);
});

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error - ${err.message}`);

    server.close(() => process.exit(1))
})