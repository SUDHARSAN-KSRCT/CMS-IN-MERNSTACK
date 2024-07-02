import express from "express";
import dotenv from 'dotenv';
import connection from "./Config/connect.js";
import cors from 'cors';
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

import userRoute from "./Routes/userRoute.js";
import courseRoute from "./Routes/courseRoute.js";
import cartRoute from "./Routes/cartRoute.js";
import contactRouter from "./Routes/contactRoute.js";

app.use('/api/users', userRoute);
app.use('/api/users', courseRoute);
app.use('/api/users', cartRoute);
app.use('/api/users', contactRouter);

app.options('*', cors());

connection().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`App started at ${process.env.PORT}`);
    });
});
