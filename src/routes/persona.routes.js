
import { Router } from "express";

import {getPersonas, 
    createPersona, 
    getPersona, 
    deletePersona,
    updatePersona} from '../controllers/personas.controller.js';

const router = Router(); 

router.get('/personas', getPersonas); 

router.get('/persona/:id', getPersona); 

router.post('/personas',createPersona);

router.delete('/persona/:id', deletePersona); 

router.patch('/persona/:id', updatePersona);

export default router; 


