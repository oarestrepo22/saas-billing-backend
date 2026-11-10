# Multi-Tenant SaaS Billing API 🚀

API Backend para un sistema SaaS _multi-tenant_ enfocado en la gestión de facturación y cobros. Diseñado con una arquitectura modular y containerizado para facilitar su despliegue y desarrollo local.

---

## 🛠️ Tecnologías Utilizadas

- **Entorno de ejecución:** Node.js
- **Framework Web:** Express.js
- **Base de Datos:** PostgreSQL
- **ORM:** Sequelize
- **Containerización:** Docker & Docker Compose
- **Desarrollo:** Nodemon

---

## 🏗️ Arquitectura General del Proyecto

El proyecto sigue un patrón de separación de responsabilidades:

- `server.js`: Punto de entrada de la aplicación (arranque del servidor HTTP y verificación de conexión a la base de datos).
- `app.js`: Configuración global de Express, middlewares y definición de rutas.
- `/src`: Módulos principales (autenticación, facturación, tenants, etc.).

---

## ⚙️ Requisitos Previos

Asegúrate de tener instalado en tu máquina:

- [Docker Desktop](https://www.docker.com/) (incluye Docker Compose)
- [Git](https://git-scm.com/)
- Un cliente de base de datos como [DBeaver](https://dbeaver.io/) (Opcional)

---

## 🚀 Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DE_TU_REPOSITTORIO>
   cd saas-billing-backend
   ```
