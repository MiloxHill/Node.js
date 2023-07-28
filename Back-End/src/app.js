import express from 'express';
import categoriasRoutes from './Routes/categorias.routes.js'; /* router en el nombre de la constante */

const app = express();

app.set("PORT", 5000);

/* Middleware - parsea y traduce para leer JSON -funciones intermedias entre la req y las res */
app.use(express.json());

/* Routes */
app.use("/api/categorias", categoriasRoutes);

export default app;