
import express from 'express';

import personas from './routes/persona.routes.js';
import pagos from './routes/pago.routes.js'; 
import usuarios from './routes/usuarios.routes.js'; 

import { PORT } from './config.js';

const app = express(); 

app.use(express.json());

app.use('/api/',personas);
app.use('/api/',pagos); 
app.use('/api/', usuarios); 

app.listen(PORT); 
