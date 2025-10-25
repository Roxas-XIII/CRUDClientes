const { poolPromise, sql } = require('../db');

exports.getClientes = async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request().query('SELECT * FROM Clientes');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.createCliente = async (req, res) => {
    const { Nombre, Correo, Telefono, Direccion } = req.body;
    try {
        const pool = await poolPromise;
        await pool.request()
            .input('Nombre', sql.NVarChar, Nombre)
            .input('Correo', sql.NVarChar, Correo)
            .input('Telefono', sql.NVarChar, Telefono)
            .input('Direccion', sql.NVarChar, Direccion)
            .query('INSERT INTO Clientes (Nombre, Correo, Telefono, Direccion) VALUES (@Nombre, @Correo, @Telefono, @Direccion)');
        res.status(201).send('Cliente creado');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.updateCliente = async (req, res) => {
    const { id } = req.params;
    const { Nombre, Correo, Telefono, Direccion } = req.body;
    try {
        const pool = await poolPromise;
        await pool.request()
            .input('Id', sql.Int, id)
            .input('Nombre', sql.NVarChar, Nombre)
            .input('Correo', sql.NVarChar, Correo)
            .input('Telefono', sql.NVarChar, Telefono)
            .input('Direccion', sql.NVarChar, Direccion)
            .query('UPDATE Clientes SET Nombre=@Nombre, Correo=@Correo, Telefono=@Telefono, Direccion=@Direccion WHERE Id=@Id');
        res.send('Cliente actualizado');
    } catch (err) {
        res.status(500).send(err.message);
    }
};

exports.deleteCliente = async (req, res) => {
    const { id } = req.params;
    try {
        const pool = await poolPromise;
        await pool.request()
            .input('Id', sql.Int, id)
            .query('DELETE FROM Clientes WHERE Id=@Id');
        res.send('Cliente eliminado');
    } catch (err) {
        res.status(500).send(err.message);
    }
};
