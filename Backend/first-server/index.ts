import express, { type Express, type Request, type Response } from 'express';

const app: Express = express();
const PORT = process.env.PORT_NUMBER || 5000;

app.get('/',(request: Request,response: Response)=> {
    response.send("<h1>Hello World</h1>")
});

app.get('/about',(request: Request,response: Response) => {
    response.send("This is about page");
});

app.listen(PORT,()=> {
    console.log(`Example app listening on port ${PORT}`)
})
