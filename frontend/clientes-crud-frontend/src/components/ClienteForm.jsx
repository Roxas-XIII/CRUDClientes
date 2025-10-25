import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const ClienteForm = ({ onSubmit, initialData }) => {
  const [cliente, setCliente] = useState({ Nombre: '', Correo: '', Telefono: '', Direccion: '' });

  useEffect(() => { if (initialData) setCliente(initialData); }, [initialData]);

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'Nombre' && /^[a-zA-Z\s]*$/.test(value)) setCliente(prev => ({ ...prev, [name]: value }));
    else if (name === 'Telefono' && /^\d{0,10}$/.test(value)) setCliente(prev => ({ ...prev, [name]: value }));
    else if (name === 'Correo' || name === 'Direccion') setCliente(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!cliente.Nombre.trim()) return Swal.fire('Error', 'Nombre inválido', 'error');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cliente.Correo)) return Swal.fire('Error', 'Correo inválido', 'error');
    if (!/^\d{10}$/.test(cliente.Telefono)) return Swal.fire('Error', 'Teléfono debe tener 10 dígitos', 'error');

    onSubmit(cliente);
    Swal.fire('Éxito', 'Cliente guardado correctamente', 'success');
    setCliente({ Nombre: '', Correo: '', Telefono: '', Direccion: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      {['Nombre', 'Correo', 'Telefono', 'Direccion'].map((field, i) => (
        <div className="mb-3" key={i}>
          <label>{field}</label>
          <input
            type={field === 'Correo' ? 'email' : 'text'}
            name={field}
            className="form-control"
            value={cliente[field]}
            onChange={handleChange}
            required
            placeholder={
              field === 'Nombre' ? 'Solo letras' :
              field === 'Telefono' ? 'Solo números, 10 dígitos' : ''
            }
          />
        </div>
      ))}
      <button type="submit" className="btn btn-primary w-100">Guardar</button>
    </form>
  );
};

export default ClienteForm;
