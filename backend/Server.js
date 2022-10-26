const express = require('express')
const dotenv = require("dotenv")
const cors = require("cors")
const app = express();
dotenv.config()
const connectionString = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.m76lti3.mongodb.net/?retryWrites=true&w=majority`
const {MongoClient} = require('mongodb')
const client = new MongoClient(connectionString)
const UserMiddleware = require("./Functions/Users")
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post("/user/create",(req,res)=>{
    UserMiddleware.CreateUser(client,req.body)
    res.send(req.body)
})
app.post("/user/update",(req,res)=>{
    UserMiddleware.AddUserScore(client,req.body)
    res.send(req.body)
})
app.post('/user/scores',(req,res)=>{
    const getUserScores = UserMiddleware.GetUserScoreboard(client,req.body)
    res.send(getUserScores)
})

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}`),
);
console.log(process.env.DB_USERNAME);
console.log(process.env.DB_PASSWORD)