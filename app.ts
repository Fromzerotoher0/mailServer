import express from "express";
import morgan from "morgan";
import cors from "cors";
import * as dotenv from "dotenv";
import routes from "./src/routes/routes";
import errorHandler from "./src/middlewares/errorHandler";
const app = express();

//middlewares basicos
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
//variables de entorno
dotenv.config({ path: "./src/env/.env" });

//rutas
app.use("/api", routes);
//middleare de errores
app.use(errorHandler);

app.listen(process.env.PORT);
console.log(`server running on port ${process.env.PORT}`);
