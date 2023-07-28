import {Router} from 'express';
import { methodsHTTP as categoriaController} from '../Controllers/categoria.controller.js';

const router = Router();

router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.AddCategorias);

export default router;
