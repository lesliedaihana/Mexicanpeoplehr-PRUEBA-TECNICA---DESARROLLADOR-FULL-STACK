<?php

$productos = [
    ['nombre' => 'Laptop', 'categoria' => 'Electrónica', 'precio' => 999],
    ['nombre' => 'Mouse', 'categoria' => 'Electrónica', 'precio' => 25],
    ['nombre' => 'Escritorio', 'categoria' => 'Muebles', 'precio' => 350],
];

// Filtrar productos de categoría "Electrónica"
$electronicos = array_filter($productos, function($producto) {
    return $producto['categoria'] === 'Electrónica';
});
echo "Productos Electrónicos:\n";
print_r($electronicos);

// Calcular precio total
$precioTotal = array_reduce($productos, function($carry, $producto) {
    return $carry + $producto['precio'];
}, 0);
echo "Precio Total: $precioTotal\n";

// Ordenar por precio descendente
usort($productos, function($a, $b) {
    return $b['precio'] <=> $a['precio'];
});
echo "Productos ordenados por precio descendente:\n";
print_r($productos);
?>