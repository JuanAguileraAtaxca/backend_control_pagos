
import { Router } from "express";
import {getPago, 
    getPagoByDate, 
    getPagoByDateDesc,
    getPagoByQuantity, 
    getPagoByQuantityDesc,
    getPagoPersona
} from '../controllers/pago.controller.js'; 


const router = Router(); 

router.get('/pagos',getPago); 
router.get('/pagos/fechaAsc', getPagoByDate); 
router.get('/pagos/fechaDesc', getPagoByDateDesc);
router.get('/pagos/quantity',getPagoByQuantity); 
router.get('/pagos/quantityDesc', getPagoByQuantityDesc); 

router.post('/pago-por-persona', getPagoPersona); 

export default router; 






