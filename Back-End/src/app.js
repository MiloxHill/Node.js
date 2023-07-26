import express from 'express';
import categoriasRoutes from './Routes/categorias.routes.js';/* router en el nombre de la constante */

const app = express();

app.set("PORT", 5000);

/* Routes */
app.use("/api/categorias", categoriasRoutes);

export default app;