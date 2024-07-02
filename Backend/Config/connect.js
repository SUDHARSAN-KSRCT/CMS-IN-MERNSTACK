import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connection = async () => {
    try {
        await connect(process.env.MONGO_URI);
        console.log("DB Connected");
    } catch (error) {
        console.log("Connection Error", error);
    }
};

export default connection;
