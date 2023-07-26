import getConnection from "../DB/database.js";

const  getCategorias = async (req, res) => {
    try {
         /* res.json({"Categoria":"Electrodomesticos"}); */
        const connection = await getConnection();
        /* Primer then garatiza coneccion que la API esta compartiendo */
        /* Segundo then  nos permite consumir los datos como tal, enviar una consulta de SQL que nos devuelva todas las filas*/
        const result = await connection.query("SELECT categoriaID, CategoriaNombre, Descripcion, imagen FROM categorias");
        console.log(result);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send
    }

}

export const methodsHTTP = {
    getCategorias
}