const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;

    // Routing //

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>VentaArtemis</title></head>')
        res.write('<body>')
        res.write('<h1>Datos de la empresa</h1>')
        res.write('<p>Nombre: VentaArtemis</p>');
        res.write('<p>Direccion: CampusLands</p>');
        res.write('<p>Gerente: Jose Arley Pabon Celis</p>');
        res.write('<p>Celular: 3123909829</p>');
        res.write('<a href="users">Usuarios</a><br>');
        res.write('<a href="categories">Categorias</a><br>');
        res.write('<a href="products">Productos</a><br>');
        res.write('<a href="employees">Empleados</a><br>');
        res.write('<a href="customers">Clientes</a><br>');
        res.write('<a href="sales">Descuentos</a><br>');
        res.write('<a href="shopping">Tienda</a><br>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/users'){
        res.write('<html>');
        res.write('<head><title>VentaArtemis</title></head>')
        res.write('<body>')
        res.write('<h1>Lista de Usuarios</h1>')
        res.write('<p>Usuario 1: Juan David Sepulveda</p>');
        res.write('<p>Usuario 2: Camilo Caballero</p>');
        res.write('<p>Usuario 3: Vermen Ayala</p>');
        res.write('<p>Usuario 4: Jessyca Avila</p>');
        res.write('</body>')
        res.write('</html>');
        return res.end();
    }

    if(url === '/categories'){
        res.write('<html>');
        res.write('<head><title>VentaArtemis</title></head>')
        res.write('<body>')
        res.write('<h1>Categorias</h1>')
        res.write('<h3>Tabla</h3>')
        res.write('<table class="default"><tr><th>ID</th><th>Nombre</th><th>Cantidad Subcategorias</th><th>Encargado</th><th>Observacion</th></tr><tr><td>1</td><td>Electrodomesticos</td><td>3</td><td>Vermen Ayala</td><td>Los mejores electrodomesticos de Bucaramanga</td></tr><tr><td>2</td><td>Frutas</td><td>2</td><td>Alba Almeida</td><td>Fruta de la mejor calidad</td></tr></table>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/products'){
        res.write('<html>');
        res.write('<head><title>VentaArtemis</title></head>')
        res.write('<body>')
        res.write('<h1>Productos</h1>')

        res.write('</body>')
        res.write('</html>');
        return res.end();
    }

    if(url === '/employees'){
        res.write('<html>');
        res.write('<head><title>VentaArtemis</title></head>')
        res.write('<body>')
        res.write('<h1>Empleados</h1>')

        res.write('</body>')
        res.write('</html>');
        return res.end();
    }

    if(url === '/customers'){
        res.write('<html>');
        res.write('<head><title>VentaArtemis</title></head>')
        res.write('<body>');
        res.write('<h1>Clientes</h1>');
        res.write('<form action="/create-customer" method="POST">');
        res.write('<label>Nombre Cliente</label><br><input type="text" name="create-customer"><br><label>Documento de Identidad</label><br><input type="text" name="create-customer"><br><label>Telefono</label><br><input type="number" name="create-customer"><br><br><button type="submit">Create</button>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/create-customer' && method === 'POST'){
        fs.writeFileSync('create-customer.text', 'Cliente creado satisfactoriamente');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }

    if(url === '/sales'){
        res.write('<html>');
        res.write('<head><title>VentaArtemis</title></head>')
        res.write('<body>')
        res.write('<h1>Descuentos</h1>')

        res.write('</body>')
        res.write('</html>');
        return res.end();
    }

    if(url === '/shopping'){
        res.write('<html>');
        res.write('<head><title>VentaArtemis</title></head>')
        res.write('<body>')
        res.write('<h1>Tienda</h1>')

        res.write('</body>')
        res.write('</html>');
        return res.end();
    }

    // Enviar respuesta //

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>VentaArtemis</title></head>')
    res.write('<body>');
    res.write('<h1>Cliente Creado</h1>');
    res.write('</body>');
    res.write('</html>');
    res.end();


});


server.listen(7000);