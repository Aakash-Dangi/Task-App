// Access the library
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/user");
const user_LoginRouter = require("./routers/User_Login"); 

const app = express();
app.use(express.json());

app.use(userRouter);
app.use(user_LoginRouter);

const port = process.env.PORT || 5000

// Connecting mongoose to server
mongoose.connect("mongodb://localhost:27017/task-manager-api", { useNewUrlParser: true }).catch((error) => { console.log(`Server Error ${error}`); })

// Creation of Port
app.listen(port,() => { console.log(`Server is live on port ${ port }`) });