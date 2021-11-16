import { Router } from "express";

const mailRoutes = require("./mail/mail.routes");
const router = Router();

router.use("/mail", mailRoutes);
export default router;
