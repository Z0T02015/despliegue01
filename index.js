require('dotenv').config()
const http = require('http')

function requestController(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(`
        <h1>🚀 Backend funcionando</h1>
        <p>Servidor activo correctamente</p>
    `)
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`)
})