// controllers/obraController.js
import { db } from "../../db.js";

// Obtener todas las obras
export const getObras = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM Obra;");
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener obras:", error);
    res.status(500).json({ error: "Error consultando DB" });
  }
};

// Crear nueva obra
export const crearObra = async (req, res) => {
  try {
    const { titulo, genero, descripcion } = req.body;

    const sql = "INSERT INTO Obra (titulo, genero, descripcion) VALUES (?, ?, ?)";
    await db.query(sql, [titulo, genero, descripcion]);

    res.json({ message: "Obra creada correctamente" });
  } catch (error) {
    console.error("Error al crear obra:", error);
    res.status(500).json({ error: "Error creando obra" });
  }
};

