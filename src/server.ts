import "reflect-metadata";
import { createConnection } from "typeorm";
import app from "./app";
import popularPedidosStatusController from "./controllers/popularPedidosStatus.controller";

createConnection()
  .then(() => {
    app.listen(3000, () => {
      popularPedidosStatusController();
      console.log("Running at http://localhost:3000");
    });
  })
  .catch((err) => console.log(err));
