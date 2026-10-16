import express,{type Express,type Request,type Response} from "express";
import cors from 'cors';
import {MongoClient} from "mongodb"
import "dotenv/config"

const app: Express = express();
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const client = new MongoClient(`${process.env.MONGODB_URL}`)

export async function connectToMongoDB(){
    try{
        await client.connect();
        console.log("Connected To MongoDB");
        return client;

    }catch(error){
        console.dir(error)
    }
}


async function startServer() {
  try {
    const connectedClient = await connectToMongoDB();
    const db = connectedClient?.db("simpleCrud");

    const users = db?.collection("users")

    app.get("/", (request: Request, response: Response) => {
      response.send("<h1>Running app...</h1>");
    });

    app.get("/users",async (request: Request,response: Response) => {
        const cursor = users?.find({});
        const allUsersData = await cursor?.toArray();

        response.send(allUsersData);
    })

    app.listen(PORT, () => {
      console.log(`Express server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed.");
    process.exit(1);
  }
}

startServer();

