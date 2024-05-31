
import {pool} from '../db.js'; 

export const getPagoPersona = async (req,res) => {
    const {idPersona} = req.body; 

    const [rows] = await pool.query('SELECT * FROM pagos WHERE id_persona=?',[idPersona]);

    if(!rows) return res.status(500).json({message: 'error'});
    
    res.json(rows); 
}


export const getPago = async (req,res) => {
    const [rows] = await pool.query('SELECT * FROM pagos'); 
    
    res.json(rows); 
}

export const getPagoByDate = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM pagos order by fecha_pago');
    
    res.json(rows); 
}

export const getPagoByDateDesc = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM pagos order by fecha_pago desc'); 

    res.json(rows);
}

export const getPagoByQuantity = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM pagos order by cantidad');
    
    res.json(rows); 
}

export const getPagoByQuantityDesc = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM pagos order by cantidad desc'); 

    res.json(rows);
}





