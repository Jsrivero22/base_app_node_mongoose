# Proyecto Base

Este repositorio contiene una plantilla base para proyectos en Node.js utilizando JavaScript. Está diseñado para ofrecer una estructura inicial organizada y funcionalidades básicas que facilitan el desarrollo y la expansión de proyectos personalizados.

Este proyecto incluye MongoDB como base de datos y Mongoose como biblioteca de modelado de objetos. Sin embargo, puedes cambiar la base de datos a PostgreSQL o cualquier otro sistema de gestión de base de datos relacional según tus necesidades.

## Tecnologías

- **Node.js:** Entorno de ejecución de JavaScript.
- **Express:** Framework de Node.js para construir aplicaciones web.
- **Mongoose:** Biblioteca de modelado de objetos MongoDB para Node.js.
- **PostgreSQL:** Sistema de gestión de base de datos relacional.
- **Dotenv:** Módulo para cargar variables de entorno desde un archivo `.env`.
- **Nodemon:** Herramienta que reinicia automáticamente la aplicación al detectar cambios en el código.
- **ESLint:** Herramienta de análisis de código estático para identificar y corregir problemas en el código JavaScript.
- **Prettier:** Herramienta para formatear el código según reglas predefinidas.
- **Env-var:** Módulo para validar y gestionar las variables de entorno de manera segura.
- **Cors:** Middleware para habilitar CORS en la aplicación Express.
- **Body-parser:** Middleware para analizar los cuerpos de las solicitudes HTTP.


## Características

- **Estructura Modular:** Organización clara y coherente de carpetas para un código más mantenible y escalable.
- **Validación de Variables de Entorno:** Configuración segura y validación de las variables de entorno para gestionar las configuraciones de manera confiable.
- **Escalabilidad:** Base robusta que permite adaptar y expandir el proyecto según sea necesario.

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/Jsrivero22/proyect_init_node_js.git


2. **Instala las dependencias:**

   ```bash
   npm install

3. **Configura las variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto y define las variables de entorno necesarias. Puedes encontrar un ejemplo en el archivo `.env.example`.

4. **Inicia el servidor:**

   ```bash
   npm run dev

## Estructura de Carpetas

La estructura de carpetas sigue una organización modular que separa las responsabilidades y facilita la escalabilidad del proyecto. A continuación, se describen las carpetas principales y su propósito:

- **`config/`**: Contiene la configuración de la aplicación, como la validación de variables de entorno.
- **`controllers/`**: Define la lógica de controladores para manejar las solicitudes HTTP.
- **`database/`**: Contiene la configuración de la base de datos.
- **`errors/`**: Define clases de errores personalizadas para manejar excepciones.
- **`helpers/`**: Contiene funciones de ayuda y utilidades reutilizables en toda la aplicación.
- **`middlewares/`**: Contiene funciones de middleware para manejar solicitudes HTTP antes de llegar a las rutas.
- **`models/`**: Define los modelos de datos de la aplicación.
- **`routes/`**: Define las rutas de la aplicación y conecta las solicitudes HTTP con los controladores.
- **`public/`**: Contiene archivos estáticos, como imágenes o hojas de estilo.
- **`services/`**: Define la lógica de servicios para interactuar con los modelos de datos.

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/feature-name`).
3. Realiza los cambios necesarios y confirma los cambios (`git commit -am 'Add new feature'`).
4. Sube los cambios a la rama (`git push origin feature/feature-name`).
5. Crea un nuevo Pull Request.
