# Sistema de Registro de Afiliados - Backend (CuidaSalud)

Este repositorio contiene el servicio backend para la aplicación de registro de afiliados, desarrollado como parte de la prueba técnica de CuidaSalud. La API está construida con **NestJS** y se conecta a una base de datos **MongoDB**.

[DEV URL](https://vene-afiliates.onrender.com/api/)

## ✨ Features (Funcionalidades)

- **Creación de Afiliados (CRUD):** Registro de nuevos afiliados con cálculo automático de cuota anual según la edad.
- **Consulta de Afiliados (CRUD):** Listado de todos los afiliados con cálculo de edad en tiempo real.
- **Eliminación de Afiliados (CRUD):** Endpoint para eliminar registros de la base de datos.
- **Validación de Datos:** Uso de DTOs y `class-validator` para asegurar la integridad de los datos de entrada.
- **Documentación de API:** Documentación interactiva generada automáticamente con Swagger[cite: 45].

## 🛠️ Tech Stack (Tecnologías Utilizadas)

- **Framework:** NestJS con TypeScript
- **Base de Datos:** MongoDB con Mongoose
- **Contenerización:** Docker y Docker Compose
- **Documentación:** Swagger (OpenAPI)

## 🚀 Cómo Empezar (Getting Started)

Sigue estos pasos para levantar el entorno de desarrollo localmente.

### **Pre-requisitos**

- [Node.js](https://nodejs.org/en/) (v16 o superior)
- [Docker](https://www.docker.com/get-started) y Docker Compose
- `npm` o `yarn`

### **Instalación y Ejecución**

1.  **Clona el repositorio:**

    ```bash
    git clone [https://github.com/bl3r3/vene-afiliates.git](https://github.com/bl3r3/vene-afiliates.git)
    cd vene-afiliates
    ```

2.  **Crea el archivo de variables de entorno:**
    Crea un archivo llamado `.env` en la raíz del proyecto y copia el contenido del siguiente ejemplo.

    `.env.example`

    ```env
    MONGO_URI=mongodb://root:rootpassword@localhost:27018/afiliadosDB?authSource=admin
    ```

    _Nota: El puerto es `27018` según tu archivo `docker-compose.yaml`._

3.  **Levanta la base de datos con Docker:**
    Este comando iniciará un contenedor de MongoDB en segundo plano.

    ```bash
    docker-compose up -d
    ```

4.  **Instala las dependencias del proyecto:**

    ```bash
    npm install
    ```

5.  **Ejecuta la aplicación en modo de desarrollo:**
    La API se ejecutará en `http://localhost:3000`.
    ```bash
    npm run start:dev
    ```

## 📄 Documentación de la API (Swagger)

Una vez que la aplicación esté corriendo, puedes acceder a la documentación interactiva de la API generada por Swagger en la siguiente URL:

[**http://localhost:3000/api**](http://localhost:3000/api)

### **Resumen de Endpoints**

| Método   | Ruta                | Descripción                                   |
| :------- | :------------------ | :-------------------------------------------- |
| `POST`   | `/afiliados`        | Crea un nuevo afiliado.                       |
| `GET`    | `/afiliados/all`    | Devuelve una lista de todos los afiliados.    |
| `GET`    | `/afiliados/:id`    | Busca un afiliado por su ID.                  |
| `DELETE` | `/afiliados/:id`    | Elimina un afiliado por su ID.                |
| `GET`    | `/afiliados/search` | Busca afiliados por un término (`?term=...`). |

## ☁️ Despliegue (Deployment)

Es compatible con cualquier plataforma que soporte despliegues desde un `Dockerfile`, como **Render**.
