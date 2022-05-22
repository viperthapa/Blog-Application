import mongoose from "mongoose";
import config from "../config/credential";

//credentials
const uri: string = `mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@cluster0.z71m3.mongodb.net/${config.DB_NAME}?retryWrites=true&w=majority`
const options: any = { useNewUrlParser: true, useUnifiedTopology: true }

const connect = () => {
    // Connecting to the database
    mongoose.connect(uri, options)
};

export default connect;
