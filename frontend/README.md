# Frontend

## Descripción

Este es el frontend del proyecto **prueba-técnica-móviles-2024**, construido con React.

## Tecnologías utilizadas

- React
- React Router
- Context API
- Redux
- Jest (para pruebas)

## Estructura del proyecto

```
frontend/
│── src/
│   ├── context/
│   ├── hooks/
│   ├── redux/
│   ├── views/
│   │   ├── components/
│   │   ├── pages/
│   ├── styles/
│── public/
│── .env.example
│── package.json
│── App.js
│── index.js
```

## Requisitos previos

- [Node.js](https://nodejs.org/) (versión 18)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)

## Instalación

1. Clona el repositorio y entra en la carpeta del frontend:
   ```bash
   git clone https://github.com/jordivilar/prueba-tecnica-moviles-2024.git
   cd prueba-tecnica-moviles-2024/frontend
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
   - `REACT_APP_BACKEND_URL`: Define la URL base del backend, incluyendo el puerto configurado.

## Uso

### Desarrollo

Ejecuta la aplicación en modo desarrollo:

```bash
npm start
```

### Producción

Construye la aplicación para producción:

```bash
npm run build
```

## Pruebas

Ejecuta los tests con:

```bash
npm run test
```

## Formato

Formatea todos los archivos de src/.

```bash
npm run format
```

Revisa si hay archivos mal formateados sin cambiarlos.

```bash
npm run format:check
```
