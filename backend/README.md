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

-  [Node.js](https://nodejs.org/) (versión 18)
-  [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

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
   -  `PORT`: Define el puerto en el que se ejecutará el servidor.
   -  `API_URL`: Especifica la URL base de la API de móviles.
   -  `API_KEY`: Contiene la clave de autenticación para acceder a la API.

## Uso

```bash
npm start
```
