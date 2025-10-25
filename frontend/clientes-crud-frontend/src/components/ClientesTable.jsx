import React from "react";

const ClientesTable = ({ clientes, onEdit, onDelete }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">📋 Lista de Clientes</h2>
      <table className="table table-hover table-bordered shadow-lg">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Dirección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((c, index) => (
            <tr key={c.id}>
              <td>{index + 1}</td>
              <td>{c.nombre}</td>
              <td>{c.correo}</td>
              <td>{c.telefono}</td>
              <td>{c.direccion}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(c)}
                >
                  ✏️ Editar
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(c.id)}
                >
                  🗑️ Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientesTable;
