import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Domain } from "domain";

dotenv.config();

const app: Express = express();
app.use(express.static('Public'));
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});