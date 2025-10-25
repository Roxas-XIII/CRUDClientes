// Asegúrate de que esto importe la 'connection' de tu db.js
// (Si tu db.js exporta 'connection', esto está bien)
const { connection } = require('../db'); 

// --- OBTENER TODOS LOS CLIENTES (GET) ---
exports.getClientes = async (req, res) => {
  // 1. El "Chismoso":
  console.log('--- INTENTO DE OBTENER CLIENTES RECIBIDO ---');
  try {
    const sql = "SELECT * FROM Clientes";

    connection.query(sql, (err, results) => {
      // 2. Manejo de error
      if (err) {
        console.error('--- ERROR AL OBTENER DE LA BASE DE DATOS (GET) ---', err.message);
        return res.status(500).json({ 
          message: 'Error en el servidor al obtener de la BD', 
          error: err.message 
        });
      }

      // 3. Si todo sale bien
      console.log('--- CLIENTES OBTENIDOS EXITOSAMENTE ---');
      res.status(200).json(results);
    });

  } catch (error) {
    console.error('--- ERROR INESPERADO (TRY/CATCH) EN LA RUTA GET ---', error.message);
    res.status(500).json({ message: 'Error inesperado en el servidor', error: error.message });
  }
};

// --- CREAR UN CLIENTE (POST) ---
exports.createCliente = async (req, res) => {
  // 1. El "Chismoso":
  console.log('--- INTENTO DE CREAR CLIENTE RECIBIDO. Body: ---', req.body);
  try {
    const { Nombre, Correo, Telefono, Direccion } = req.body;

    if (!Nombre || !Correo || !Telefono || !Direccion) {
      console.error('--- ERROR: Faltan datos en el body ---', req.body);
      return res.status(400).json({ message: 'Faltan datos (Nombre, Correo, Telefono o Direccion)' });
    }

    const sql = "INSERT INTO Clientes (Nombre, Correo, Telefono, Direccion) VALUES (?, ?, ?, ?)";
    const values = [Nombre, Correo, Telefono, Direccion];

    connection.query(sql, values, (err, result) => {
      // 2. Manejo de error
      if (err) {
        console.error('--- ERROR AL INSERTAR EN LA BASE DE DATOS (POST) ---', err.message);
        return res.status(500).json({ 
          message: 'Error en el servidor al guardar en la BD', 
          error: err.message 
        });
      }

      // 3. Si todo sale bien
      console.log('--- CLIENTE CREADO EXITOSAMENTE ---', result);
      res.status(201).json({ message: 'Cliente creado con éxito', insertId: result.insertId });
    });

  } catch (error) {
    console.error('--- ERROR INESPERADO (TRY/CATCH) EN LA RUTA POST ---', error.message);
    res.status(500).json({ message: 'Error inesperado en el servidor', error: error.message });
  }
};

// --- ACTUALIZAR UN CLIENTE (PUT) ---
exports.updateCliente = async (req, res) => {
  console.log('--- INTENTO DE ACTUALIZAR CLIENTE RECIBIDO ---');
  try {
    const { id } = req.params;
    const { Nombre, Correo, Telefono, Direccion } = req.body;

    if (!Nombre || !Correo || !Telefono || !Direccion || !id) {
      console.error('--- ERROR: Faltan datos en el body o ID ---', req.body, req.params);
      return res.status(400).json({ message: 'Faltan datos o el ID' });
    }

    const sql = "UPDATE Clientes SET Nombre = ?, Correo = ?, Telefono = ?, Direccion = ? WHERE Id = ?";
    const values = [Nombre, Correo, Telefono, Direccion, id];

    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error('--- ERROR AL ACTUALIZAR EN LA BASE DE DATOS (PUT) ---', err.message);
        return res.status(500).json({ message: 'Error en el servidor al actualizar', error: err.message });
      }
      console.log('--- CLIENTE ACTUALIZADO EXITOSAMENTE ---', result);
      res.status(200).json({ message: 'Cliente actualizado' });
    });

  } catch (error) {
    console.error('--- ERROR INESPERADO (TRY/CATCH) EN LA RUTA PUT ---', error.message);
    res.status(500).json({ message: 'Error inesperado en el servidor', error: error.message });
  }
};

// --- ELIMINAR UN CLIENTE (DELETE) ---
exports.deleteCliente = async (req, res) => {
  console.log('--- INTENTO DE ELIMINAR CLIENTE RECIBIDO ---');
  try {
    const { id } = req.params;

    if (!id) {
      console.error('--- ERROR: Falta ID para eliminar ---', req.params);
      return res.status(400).json({ message: 'Falta el ID' });
    }

    const sql = "DELETE FROM Clientes WHERE Id = ?";
    
    connection.query(sql, [id], (err, result) => {
      if (err) {
        console.error('--- ERROR AL ELIMINAR EN LA BASE DE DATOS (DELETE) ---', err.message);
        return res.status(500).json({ message: 'Error en el servidor al eliminar', error: err.message });
      }
      console.log('--- CLIENTE ELIMINADO EXITOSAMENTE ---', result);
      res.status(200).json({ message: 'Cliente eliminado' });
    });

  } catch (error) {
    console.error('--- ERROR INESPERADO (TRY/CATCH) EN LA RUTA DELETE ---', error.message);
    res.status(500).json({ message: 'Error inesperado en el servidor', error: error.message });
  }
};