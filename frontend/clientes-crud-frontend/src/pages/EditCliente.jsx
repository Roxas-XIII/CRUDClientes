import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ClienteForm from '../components/ClienteForm';
import { getClientes, updateCliente } from '../services/clienteService';
import Swal from 'sweetalert2';

const EditCliente = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    const fetchCliente = async () => {
      const res = await getClientes();
      const c = res.data.find(c => c.Id === parseInt(id));
      setCliente(c);
    };
    fetchCliente();
  }, [id]);

  const handleUpdate = async (updatedCliente) => {
    await updateCliente(id, updatedCliente);

    // Alerta de éxito al actualizar
    Swal.fire({
      icon: 'success',
      title: 'Cliente actualizado',
      text: `${updatedCliente.Nombre} fue actualizado correctamente.`,
      timer: 2000,
      showConfirmButton: false
    });

    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-lg p-4 rounded-4">
            <h3 className="text-center mb-4 text-warning">Editar Cliente</h3>
            {cliente ? (
              <ClienteForm onSubmit={handleUpdate} initialData={cliente} />
            ) : (
              <p className="text-center text-muted">Cargando cliente...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCliente;
