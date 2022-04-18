import express from "express";
import route from "./routes";
import listEndpoints from "express-list-endpoints";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use(route);

console.table(
  listEndpoints(app).map(({ methods, path }) => {
    return { methods, path };
  })
);

export default app;
