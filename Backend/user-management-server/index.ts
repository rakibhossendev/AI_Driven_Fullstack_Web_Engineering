import express,{type Express, type Request, type Response} from "express" 
import cors from "cors";

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

// users data
const users = [
    {id: 1,name: "MST. MAFUZA KHATUN.",email: "mst.mafuza.khatun@gmail.com"},
    {id: 2,name: "RAKIB HOSSEN.",email: "dev.rakibhossen.web@gmail.com"},
    {id: 3,name: "MD. RIAD HASAN.",email: "dev.riad.hasan@gmail.com"},
    {id: 4,name: "MD. ABIR HASAN",email: "dev.abir.hasan@gmail.com"}
]

app.post("/users", (request, response) => {
  const user = request.body;
  
  const newUser = {
    id: users.length + 1,
    ...user
  };

  users.push(newUser);
  console.log(request.body);

  response.send({ success: true, message: "User added successfully" });
});

app.get("/",(request: Request,response: Response) => {
    response.send("User is coming soon...");
})


app.get("/users",(request: Request, response: Response) => {
    response.send(users);
})

app.listen(PORT,()=> {
    console.log(`Express server running on port ${PORT}`);
})
