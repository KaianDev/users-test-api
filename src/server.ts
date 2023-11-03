import express from "express";
import dotenv from "dotenv";
import mainRoutes from "./routes";
import cors from "cors";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

server.use("/", mainRoutes);

const PORT = Number(process.env.PORT) || 8080;

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
