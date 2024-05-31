
import {pool} from '../db.js';

export const getPersonas = async (req,res)=>{
     
    const [rows] = await pool.query("SELECT * FROM persona");
    
    res.json(rows); 
}

export const getPersona = async (req, res) => {

    const id = req.params.id; 

    const [rows] =await pool.query('SELECT * FROM persona WHERE id=?',[id]); 

    if(rows.length <= 0) return res.status(404).json({
        "message":"persona not found"
    });

    res.send(rows[0]); 
}


export const createPersona = async (req,res)=>{
    const {
        id, nombre, aPaterno, aMaterno,
        fechaN, calle, colonia, referencia,
        correo, telefono
    } = req.body; 

    await pool.query(
        'INSERT INTO persona(id,nombre, apellido_paterno,apellido_materno, fecha_nacimiento, calle, colonia, referencia,correo, numero_telefono) values(?,?,?,?,?,?,?,?,?,?)',
        [id, nombre, aPaterno, aMaterno,fechaN, calle, colonia, referencia,correo, telefono]
    ); 

    res.send("correct"); 
}

export const deletePersona = async (req, res) =>{

    const id = req.params.id; 

    const [{affectedRows}] = await pool.query('DELETE FROM persona WHERE id=?',[id]); 

    if(affectedRows <= 0) return res.status(404).json({
        "message":"register don't deleted"
    });

    res.status(200).send({
        "message":"register deleted"
    }); 
} 

export const updatePersona = async (req,res)=>{
    const {
        id, nombre, aPaterno, aMaterno,
        fechaN, calle, colonia, referencia,
        correo, telefono
    } = req.body; 

    const [{affectedRows}] = await pool.query(
        'UPDATE persona SET nombre=?, apellido_paterno=?,apellido_materno=?, fecha_nacimiento=?, calle=?, colonia=?, referencia=?,correo=?, numero_telefono=? WHERE id=?',
        [nombre, aPaterno, aMaterno,fechaN, calle, colonia, referencia,correo, telefono, id]
    );
    
    if(affectedRows <= 0) return res.status(404).json({
        "message":"register doesn't updated"
    });

    res.status(200).send({
        "message":"register updated"
    });

}



