import { Router, Request, Response } from "express";
import sendEmail from "./mail.controller";

const router = Router();

router.get("/", (request: Request, response: Response) => {
  response.send("servidor de correos hecho en ts");
});

router.post("/", sendEmail);
module.exports = router;
