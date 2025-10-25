const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const clientesRoutes = require('./routes/clientes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/clientes', clientesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
