const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  res.end(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Proyecto 3 - Node.js</title>
      <style>
        body { background: #f6e58d; font-family: Tahoma; text-align: center; }
        h1 { color: #27ae60; }
        p { font-size: 20px; }
      </style>
    </head>
    <body>
      <h1>Proyecto 3</h1>
      <p>Este proyecto corre en <b>Node.js ANTONIO</b> en el puerto 5000.</p>
    </body>
    </html>
  `);
});

server.listen(5000, () => {
  console.log('Servidor corriendo en http://localhost:5000');
});
