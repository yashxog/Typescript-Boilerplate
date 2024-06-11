import express, { Request, Response } from "express";
import http from "http";
import cors from "cors";
import routes from "./routes/index";


const PORT = process.env.PORT || 5005;
const app = express();

const corsOptions = {
    origin: "*",
  };
  
app.use(cors(corsOptions));
app.use(express.json());

//Only use for Web Socket Connection
const server = http.createServer(app);


app.use("/singulariti", routes);
app.get("/", (req: Request, res: Response) => {
  res.send("server started successfully!");
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
