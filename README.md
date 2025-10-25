#  CRUD de Clientes

Aplicación Full Stack que permite gestionar clientes mediante un sistema **CRUD** (Crear, Leer, Actualizar y Eliminar).  
Este proyecto fue desarrollado como parte de una **prueba técnica, utilizando **React, Node.js, Express y SQL Server.

---

##  Funcionalidades

- **Crear Cliente**: registrar un cliente con nombre completo, correo electrónico, teléfono y dirección.  
- **Listar Clientes**: visualizar clientes en una tabla interactiva con opción de paginación.  
- **Editar Cliente**: actualizar cualquier dato del cliente con validaciones.  
- **Eliminar Cliente**: borrar un cliente con confirmación previa.  

---

## 🛠️ Tecnologías utilizadas

### Frontend
- [React] 
- [React Router]
- [Bootstrap]

### Backend
- [Node.js] + [Express] 
- [MSSQL] (conexión a SQL Server)  

### Base de Datos
- **SQL Server 2019/2022**  
- Autenticación de SQL Server (modo SQL, con usuario/contraseña)

---

## ⚙️ Instalación y ejecución

### 🔹 Requisitos previos
- Tener instalado **Node.js** (v18+ recomendado)  
- Tener instalado **SQL Server** (Developer o Express Edition)  
- Crear la base de datos en SQL Server y ejecutar el script `clientes.sql`


###Ejecucion

#Configurar el backend
Ir a la carpeta del backend:

-cd backend

*Instalar dependencias:

npm install


##Crear un archivo .env con la configuración de tu base de datos SQL Server. 

DB_USER=sa
DB_PASSWORD=tuContraseña
DB_SERVER=localhost
DB_DATABASE=ClientesDB


##Ejecutar el servidor:

node server.js


El backend se ejecutará en http://localhost:5000.

------

## Configurar el frontend

Ir a la carpeta del frontend:

cd ../frontend

###Instalar dependencias:
npm install

##Ejecutar la aplicación React:

npm start

El frontend se abrirá automáticamente en tu navegador en http://localhost:3000.
