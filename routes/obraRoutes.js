// routes/obraRoutes.js
import express from "express";
import { getObras, crearObra } from "../controllers/obraController.js";

const router = express.Router();

// GET /api/obras
router.get("/obras", getObras);

// POST /api/obras
router.post("/obras", crearObra);

export default router;

