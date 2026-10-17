import express,{type Express,type Request,type Response} from "express";
import cors from 'cors';
import {MongoClient,ObjectId} from "mongodb"
import "dotenv/config"

const app: Express = express();
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


interface UsersDataType{
    _id: ObjectId;
    name: string;
    email: string;
    age: number;
    role: string;
}

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

    const users = db?.collection<UsersDataType>("users")

    app.get("/", (request: Request, response: Response) => {
      response.send("<h1>Running app...</h1>");
    });

    app.get("/users",async (request: Request,response: Response) => {
        const cursor = users?.find({});
        const allUsersData = await cursor?.toArray();

        response.send(allUsersData);
    });

    
    app.get("/user/:id", async (request: Request, response: Response) => {
        const id = request.params.id;

        if (typeof id !== "string" || !ObjectId.isValid(id)) {
            return response.status(400).send({
                message: "Invalid user ID"
            });
        }

        const query: {_id: ObjectId} = { _id: new ObjectId(id) };

        const result = await users?.findOne<UsersDataType>(query);

        if (!result) {
            return response.status(404).send({
                message: "User not found"
            });
        }

        response.send(result);
    });


    app.post("/users",async (request: Request, response: Response) => {
      const result = await users?.insertOne(request.body);

      console.log(result)
      
      response.send(result);
    });

    app.delete("/users/:id",async(request: Request, response: Response) => {
        const id = request.params.id;

        if(typeof id !== "string" || !ObjectId.isValid(id)){
            return response.status(404).send({
                message: "User not found"
            })
        }
        const query: {_id: ObjectId} = {_id: new ObjectId(id)};
        const result = await users?.deleteOne<UsersDataType>(query);

        if(!result){
            return response.status(404).send({
                message: "User Not found"
            })
        }

        response.send(result)
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

