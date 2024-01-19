import mongoose from "mongoose";

const connectMongo = mongoose
    .connect('mongodb://127.0.0.1:27017/speedy?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1',)
    .then(() => {
        console.log("DB Connetion Successfull");
    })
    .catch((err) => {
        console.log(err.message);
    });

export default connectMongo