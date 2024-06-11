import express from "express";

const router = express.Router();

router.use("/images", () => { console.log("No images found") });

export default router;