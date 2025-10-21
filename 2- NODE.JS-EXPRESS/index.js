
const express = require('express');
const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Middleware de logging
app.use((req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
});

// Array en memoria para almacenar productos
let productos = [
    { id: 1, nombre: 'Laptop', precio: 999.99, stock: 10 },
    { id: 2, nombre: 'Mouse', precio: 25.99, stock: 50 },
    { id: 3, nombre: 'Teclado', precio: 49.99, stock: 30 }
];
let nextId = 4;

// GET /api/productos - Lista todos los productos
app.get('/api/productos', (req, res) => {
    res.json(productos);
});

// POST /api/productos - Crea un nuevo producto
app.post('/api/productos', (req, res) => {
    const { nombre, precio, stock } = req.body;

    // Validaciones
    if (!nombre || typeof nombre !== 'string' || nombre.length < 3) {
        return res.status(400).json({ error: 'El nombre es requerido y debe tener al menos 3 caracteres' });
    }
    if (!precio || typeof precio !== 'number' || precio <= 0) {
        return res.status(400).json({ error: 'El precio es requerido y debe ser un número positivo' });
    }
    if (!Number.isInteger(stock) || stock < 0) {
        return res.status(400).json({ error: 'El stock debe ser un número entero no negativo' });
    }

    const nuevoProducto = {
        id: nextId++,
        nombre,
        precio,
        stock
    };
    productos.push(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

// GET /api/productos/:id - Obtiene un producto específico
app.get('/api/productos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const producto = productos.find(p => p.id === id);

    if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});