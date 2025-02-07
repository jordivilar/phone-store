# Backend

## Descripción

Este es el backend del proyecto **prueba-técnica-móviles-2024**, construido con Node.js y Express. Se encarga de manejar las solicitudes API, la lógica de negocio y las solicitudes a la API de productos.

## Tecnologías utilizadas

-  Node.js
-  Express

## Estructura del proyecto

```
backend/
│── src/
│   ├── routes/
│── .env.example
│── package.json
│── server.js
```

## Requisitos previos

-  [Node.js](https://nodejs.org/) (versión 16 o superior)
-  [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
-  Base de datos PostgreSQL u otra según configuración

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/jordivilar/prueba-tecnica-moviles-2024.git
   cd prueba-tecnica-moviles-2024/backend
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración

1. Copia el archivo de ejemplo de variables de entorno y renómbralo a `.env`:
   ```bash
   cp .env.example .env
   ```
2. Edita el archivo `.env` con los valores adecuados.

## Uso

```bash
npm start
```
