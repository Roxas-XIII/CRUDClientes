import React from 'react';
import { Link } from 'react-router-dom';

const ClienteList = ({ clientes, onDelete }) => {
  return (
    <table className="table table-bordered">
      <thead className="table-dark">
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Teléfono</th>
          <th>Dirección</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {clientes.map(cliente => (
          <tr key={cliente.Id}>
            <td>{cliente.Nombre}</td>
            <td>{cliente.Correo}</td>
            <td>{cliente.Telefono}</td>
            <td>{cliente.Direccion}</td>
            <td>
              <Link className="btn btn-warning me-2" to={`/edit/${cliente.Id}`}>Editar</Link>
              <button className="btn btn-danger" onClick={() => onDelete(cliente.Id)}>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClienteList;
