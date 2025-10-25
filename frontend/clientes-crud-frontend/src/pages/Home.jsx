import React, { useEffect, useState } from 'react';
import ClienteList from '../components/ClienteList';
import ClienteForm from '../components/ClienteForm';
import { getClientes, createCliente, deleteCliente } from '../services/clienteService';
import Swal from 'sweetalert2';

const Home = () => {
  const [clientes, setClientes] = useState([]);

  const fetchClientes = async () => {
    const res = await getClientes();
    setClientes(res.data);
  };

  useEffect(() => {
    fetchClientes();
  }, []);

 const handleCreate = async (clienteData) => {
  await createCliente(clienteData);
  fetchClientes();

  Swal.fire({
    icon: 'success',
    title: 'Cliente agregado',
    text: `${clienteData.Nombre} fue agregado correctamente.`,
    timer: 2000,
    showConfirmButton: false,
  });
};

  const handleDelete = async (id) => {
    const cliente = clientes.find(c => c.Id === id);

const result = await Swal.fire({
  title: '¿Estás seguro?',
  text: `Se eliminará a ${cliente.Nombre}`,
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#d33',
  cancelButtonColor: '#3085d6',
  confirmButtonText: 'Sí, eliminar',
  cancelButtonText: 'Cancelar'
});

    if (result.isConfirmed) {
      await deleteCliente(id);
      fetchClientes();

      // Alerta de éxito al eliminar
      Swal.fire({
        icon: 'success',
        title: 'Eliminado',
        text: `${cliente.Nombre} fue eliminado correctamente.`,
        timer: 2000,
        showConfirmButton: false
      });
    }
  };

  return (
    <div className="container mt-4">
      <div className="row g-4">
        {/* FORMULARIO */}
        <div className="col-lg-5 col-md-6">
          <div className="card shadow-lg p-4 rounded-4">
            <h3 className="text-center mb-3 text-primary">Agregar Cliente</h3>
            <ClienteForm onSubmit={handleCreate} />
          </div>
        </div>

        {/* LISTA DE CLIENTES */}
        <div className="col-lg-7 col-md-6">
          <div className="card shadow-lg p-4 rounded-4">
            <h3 className="text-center mb-3 text-success">Lista de Clientes</h3>
            <ClienteList clientes={clientes} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
