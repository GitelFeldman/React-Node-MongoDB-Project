import express  from "express";
import { config } from "dotenv";
import morgan from "morgan";
import itemRouter from "./routs/item.js"
import userRouter from "./routs/user.js"
import orderRouter from "./routs/order.js"

import{connectToDB} from "./config/dbConfig.js"
import {errorHandling} from "./middlewares/errorHadlingMiddleware.js"
import cors from"cors"
config();
connectToDB();
const app=express();
app.use(express.json());
app.use(cors({origin:"http://localhost:3000",methods:"*"}));
app.use(morgan("common"));
app.use("/api/item",itemRouter);
app.use("/api/user",userRouter);
app.use("/api/order",orderRouter);
app.use(express.static('images'))

app.use(errorHandling);
let port=process.env.PORT||3500;
app.listen(port,()=>console.log(`app is listening on port${port}`));