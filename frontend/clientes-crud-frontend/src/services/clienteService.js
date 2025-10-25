import axios from 'axios';

// La URL correcta debe incluir /api/clientes
const API_URL = 'https://cruddeclientes.onrender.com/api/clientes';

export const getClientes = () => axios.get(API_URL);
export const createCliente = (cliente) => axios.post(API_URL, cliente);

// Estas funciones ya estaban bien, porque agregan el /${id} al final
export const updateCliente = (id, cliente) => axios.put(`${API_URL}/${id}`, cliente);
export const deleteCliente = (id) => axios.delete(`${API_URL}/${id}`);