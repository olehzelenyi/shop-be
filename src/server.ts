import express, {Express} from 'express';
import dotenv from 'dotenv';
import connectToMongoDB from "./db/connectToMongoDB";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.listen(port, async () => {
    await connectToMongoDB();
    console.log(`app is running on ${port} port ...`);
});