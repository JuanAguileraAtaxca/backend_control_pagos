
import {Router} from 'express'; 

import {
    getUsuarioByUsername, 
    createUser, 
    loginUser, 
    validateUser
} from '../controllers/usuarios.controller.js'; 

const router = Router(); 

router.get('/usuario/:username',getUsuarioByUsername); 
router.post('/usuario', createUser); 

router.post('/usuario-login', loginUser);

router.post('/usuario-accept', validateUser); 

export default router; 

