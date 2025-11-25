// index.js
import express from "express";
import cors from "cors";
import obraRoutes from "./routes/obraRoutes.js";
import imageRoutes from "./routes/image.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API funcionando!");
});

// Usar rutas
app.use("/api", obraRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor iniciado en puerto " + PORT));

