import express, { Express } from "express";
import cors from "cors";
import connect from "./config/db"
import blogRoutes from "./routes/blogRoutes"
connect();

const app: Express = express()
app.use(express.json());

const PORT: string | number = process.env.PORT || 5000

app.use(cors())
app.use("/api/blog", blogRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})