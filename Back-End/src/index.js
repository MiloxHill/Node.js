import app from "./app.js";

const main = () =>{
    app.listen(app.get("PORT"))
    console.log(`The server is running on port ${app.get("PORT")}`);
}

main();