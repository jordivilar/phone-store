# Catálogo de Teléfonos Móviles

Este proyecto es una aplicación web para visualizar, buscar y gestionar un catálogo de teléfonos móviles. Cuenta con un frontend desarrollado con React.js, React Router, Context API y Redux, junto con Jest para pruebas. El backend, basado en Node.js y Express, se encarga de gestionar las solicitudes a la API y de ocultar la clave x-api-key para evitar exponerla en el frontend.

## Demo

[https://mobiles-fe.vercel.app/](https://mobiles-fe.vercel.app/)

## Características

-  Visualización de una lista de teléfonos móviles.
-  Búsqueda de dispositivos por nombre y marca.
-  Gestión de un carrito de compras para añadir dispositivos.

## Requisitos

-  Implementación de pruebas (testing).
-  La aplicación debe ser responsive.
-  Correcta accesibilidad.
-  Uso de _linters_ y _formatters_.
-  La consola del navegador debe estar libre de errores y advertencias (\*).
   -  (\*) El único warning que aparece en la consola proviene de React Router y no del código propio del proyecto. Se debe a un cambio en la resolución de rutas relativas dentro de rutas con \* en la futura versión 7. Aunque actualizar a React Router v7 elimina la advertencia, esto provoca incompatibilidades con Jest, impidiendo la ejecución de pruebas.
-  Incluir un README.
-  Despliegue de la aplicación.
-  Uso de variables CSS.

## Estructura del Proyecto

-  `/frontend`: Contiene el código fuente del frontend de la aplicación.
-  `/backend`: Contiene el código fuente del backend de la aplicación.

Para más detalles sobre cada componente, consulta los archivos README en las respectivas carpetas.

## Instalación y Ejecución

Para instrucciones detalladas sobre cómo instalar y ejecutar el proyecto, por favor, revisa los archivos README en las carpetas `frontend` y `backend`.
