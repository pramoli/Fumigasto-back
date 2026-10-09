import express from "express";

// Creamos la aplicación Express
const app = express();

// Una ruta muy simple, solo para comprobar que el servidor responde
app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});