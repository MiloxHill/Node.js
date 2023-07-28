import { query } from "express";
import getConnection from "../DB/database.js";

const  getCategorias = async (req, res) => {
    try {
         /* res.json({"Categoria":"Electrodomesticos"}); */
        const connection = await getConnection();
        /* Primer then garatiza coneccion que la API esta compartiendo */
        /* Segundo then  nos permite consumir los datos como tal, enviar una consulta de SQL que nos devuelva todas las filas*/
        const result = await connection.query("SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }

}

const AddCategorias = async (req, res) =>{
    try {
        const { CategoriaNombre, Descripcion, Imagen } = req.body;

        /* console.log( CategoriaNombre, Descripcion, Imagen); */

        const category = {
            CategoriaNombre, 
            Descripcion, 
            Imagen
        };

        const connection = await getConnection();

        const result = await connection.query("INSERT INTO categorias SET ?", category);

        /* res.json({"CategoriaNombre": "Ropa Femenina"}); */
        res.json(result);
        
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

export const methodsHTTP = {
    getCategorias,
    AddCategorias
}