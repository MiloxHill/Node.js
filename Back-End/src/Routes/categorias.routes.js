import {Router} from 'express';
import { methodsHTTP as categoriaController} from '../Controllers/categoria.controller.js';

const router = Router();

router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.AddCategorias);

/* La ruta recibe un parametro para buscar una sola categoria por ID */
router.get("/:id", categoriaController.getCategoria);

/* Laruta recibe como parametro el id de la categoria a eliminar  */
router.delete("/:id", categoriaController.deleteCategoria);

router.put("/:id", categoriaController.updateCategoria );



export default router;
