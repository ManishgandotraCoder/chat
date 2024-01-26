import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import { routes } from "./routes/route";
import passprt from "passport";
import { passport } from "./middlewares/passport"
import bearerToken from 'express-bearer-token';
import connectMongo from "./config/mongo";
const socket = require("socket.io");

const port = process.env.PORT || 9000;
const app = express();
app.use(passprt.initialize());
(passport)(passprt);

app.use(bearerToken());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': false }));

app.use('/api', routes);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers");
  next();
});

app.listen(port, async () => {
  connectMongo
  console.log(`Listening on port ${port}`);
});


const server = app.listen(5000, () =>
  console.log(`Server started on ${5000}`)
);
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global: {
  var onlineUsers :any= {};
  var chatSocket = ''
}


io.on("connect", (socket: any) => {
  socket.on("add-user", (namespace: any) => { 
    onlineUsers[namespace]=true
  });
  
  socket.on("foo", (data: any) => {
    console.log(data.group);

    const sendUserSocket = onlineUsers[data.group]
    
    if (sendUserSocket) {
      io.emit("foo", data.msg);
    }
  });
});
process.on('uncaughtException', function (err) {
  console.log("Error", err)
})