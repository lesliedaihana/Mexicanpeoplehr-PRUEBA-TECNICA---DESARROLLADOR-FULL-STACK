# ✅ PRUEBA TÉCNICA - DESARROLLADOR FULL STACK - COMPLETADA

**Candidata**: Daihana Gómez  
**Repositorio**: https://github.com/lesliedaihana/Mexicanpeoplehr-PRUEBA-TECNICA---DESARROLLADOR-FULL-STACK  
**Fecha de entrega**: 20 de octubre de 2025  

---

## 📋 DESCRIPCIÓN GENERAL
Esta prueba técnica demuestra habilidades en las siguientes tecnologías a nivel básico-intermedio:

- **Tecnologías**: JavaScript, Node.js, PHP, Laravel
- **Tiempo estimado de ejecución**: 2.5 - 3 horas
- **Estructura**: Código organizado en carpetas (1-JAVASCRIPT, 2- NODE.JS-EXPRESS, 3-PHP, 4-LARAVEL)

---

## 📋 PROGRESO
- [x] **Parte 1: JavaScript** - Manipulación de Arrays + Async/Await
- [x] **Parte 2: Node.js + Express** - API REST de Productos
- [x] **Parte 3: PHP** - Calculadora POO + Trabajo con Arrays
- [x] **Parte 4: Laravel** - CRUD de Tareas 

---

## 🚀 DEMOSTRACIÓN DETALLADA

### **Parte 1: JavaScript**
- **Ejercicio 1**: `analizarNumeros([1, 2, 3, 4, 5, 6])` retorna `{ pares: 12, impares: 9, promedio: 3.5 }`.
- **Ejercicio 2**: `fetchUsuarios()` simula una API, muestra usuarios tras 2 segundos con manejo de errores.

### **Parte 2: Node.js + Express**
- **Endpoints**:
  - `GET /api/productos` → Lista productos.
  - `POST /api/productos` → Crea producto (ejemplo: `{"nombre":"Laptop","precio":999.99}`).
  - `GET /api/productos/:id` → Obtiene producto por ID.
- **Validaciones**: Nombre (>3 caracteres), Precio (>0).
- **Logging**: Registra peticiones en consola.

### **Parte 3: PHP**
- **Ejercicio 1**: Clase `Calculadora` con métodos (sumar, restar, multiplicar, dividir) y historial.
- **Ejercicio 2**: Filtra productos electrónicos, calcula total (1374), ordena por precio descendente.

### **Parte 4: Laravel**
- **Endpoints probados**:
GET    http://127.0.0.1:8000/api/tareas           → []
POST   http://127.0.0.1:8000/api/tareas           → {id:1, titulo:"Completar prueba"...}
GET    http://127.0.0.1:8000/api/tareas           → [{id:1, ...}]
PUT    http://127.0.0.1:8000/api/tareas/1         → {id:1, titulo:"Completada", completada:true}
DELETE http://127.0.0.1:8000/api/tareas/1         → 204 (eliminado)
text- **BONUS**: Scope `completadas` (`GET /api/tareas?completadas=true`).

---

## 🛠️ INSTRUCCIONES DE INSTALACIÓN Y EJECUCIÓN

### **Requisitos previos**
Antes de comenzar, asegúrate de tener instalados los siguientes programas:
- **Node.js** (versión 14 o superior): [Descargar](https://nodejs.org/)
- **PHP** (versión 7.4 o superior): [Descargar](https://www.php.net/downloads.php)
- **Composer** (para Laravel): [Descargar](https://getcomposer.org/download/)
- **Git** (para clonar el repositorio): [Descargar](https://git-scm.com/downloads)
- **cURL** (opcional, para probar APIs): Viene preinstalado en la mayoría de sistemas; verifica con `curl --version`.

**Nota**: Ejecuta todos los comandos en una terminal (CMD, PowerShell en Windows, o Terminal en macOS/Linux).

### **Clonar el repositorio**
1. Abre una terminal.
2. Ejecuta:
 ```
 git clone https://github.com/lesliedaihana/Mexicanpeoplehr-PRUEBA-TECNICA---DESARROLLADOR-FULL-STACK.git
 cd Mexicanpeoplehr-PRUEBA-TECNICA---DESARROLLADOR-FULL-STACK
1. JavaScript

Ubicación: 1-JAVASCRIPT
Pasos:

Navega a la carpeta:
cd 1-JAVASCRIPT

Ejecuta el script:
node javascript.js



Resultado esperado: Verás en la consola el objeto { pares: 12, impares: 9, promedio: 3.5 } y la lista de usuarios después de 2 segundos.
Requisito: Solo necesitas Node.js instalado.

2. Node.js + Express

Ubicación: 2- NODE.JS-EXPRESS
Pasos:

Navega a la carpeta:
cd 2- NODE.JS-EXPRESS

Instala las dependencias:
npm install

Inicia el servidor:
node index.js



Pruebas (en otra terminal):

Lista productos:
curl http://localhost:3000/api/productos

Crea un producto:
curl -X POST http://localhost:3000/api/productos -H "Content-Type: application/json" -d "{\"nombre\":\"Laptop\",\"precio\":999.99}"



Resultado esperado: Verás un log en la consola del servidor y respuestas JSON en las pruebas.
Requisito: Node.js y npm.

3. PHP

Ubicación: 3-PHP
Pasos:

Navega a la carpeta:
cd 3-PHP

Ejecuta cada script:
php calculadora.php
php arrays.php



Resultado esperado: Verás resultados como "8" (suma) y el array procesado (electrónica, total 1374) en la terminal.
Requisito: PHP instalado y accesible desde la terminal.

4. Laravel

Ubicación: 4-LARAVEL
Pasos:

Navega a la carpeta:
cd 4-LARAVEL

Instala las dependencias:
composer install

Crea una base de datos SQLite:
type nul > database/database.sqlite

Ejecuta las migraciones:
php artisan migrate

Crea un usuario de prueba (en una nueva terminal o modo interactivo):
php artisan tinker
App\Models\User::create(['name'=>'Test','email'=>'test@test.com','password'=>bcrypt('123')]);
exit

Inicia el servidor:
php artisan serve



Pruebas (en otra terminal, después de php artisan serve):

Lista tareas:
bashcurl http://127.0.0.1:8000/api/tareas

Crea una tarea:
curl -X POST http://127.0.0.1:8000/api/tareas -H "Content-Type: application/json" -d "{\"titulo\":\"Tarea\",\"fecha_vencimiento\":\"2025-10-25\",\"usuario_id\":1}"



Resultado esperado: Verás respuestas JSON (lista vacía o tarea creada) en la terminal.
Requisito: PHP, Composer, y acceso a la terminal.


🎯 FUNCIONALIDADES IMPLEMENTADAS

JavaScript: Arrays (filtros, reduce), Async/Await con simulación.
Node.js: API REST con validaciones y logging.
PHP: POO con excepciones, arrays con funciones modernas.
Laravel: CRUD completo con migraciones, modelo, FormRequest, scope BONUS.


📊 TECNOLOGÍAS UTILIZADAS

Frontend: JavaScript ES6+
Backend: Node.js, Express, PHP 8, Laravel 9.5
Base de datos: SQLite
Herramientas: Composer, npm, Git




🎉 ¡GRACIAS POR LA OPORTUNIDAD!
