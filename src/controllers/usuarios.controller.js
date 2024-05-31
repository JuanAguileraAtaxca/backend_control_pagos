
import jsonwebtoken from 'jsonwebtoken'

import { pool } from '../db.js';

const JWT_SECRET = "jCY61gffjC9SdXhj6PBhb7mf4c";

export const loginUser = async (req, res) => {
    const {username, password} = req.body; 
    const [rows] = await pool.query(
        'SELECT * FROM usuario WHERE username=? AND password=?', 
        [username, password]
    );
    if(!rows[0]){
        return res.send({status: 'error'});
    }
    if(rows[0].password === password){
        const jwt = jsonwebtoken.sign({username: username},JWT_SECRET);
        return res.send({token:jwt, status:'ok'}); 
    } 
}


export const validateUser = async (req,res) => {
    const {token} = req.body; 
    const user = jsonwebtoken.verify(token, JWT_SECRET);
    const username = user.username; 
    const [rows] = await pool.query('SELECT * FROM usuario WHERE username=?',[username]); 
    const id = rows[0].id_persona; 
    const [query] = await pool.query('SELECT * FROM persona WHERE id=?',[id]);
    console.log(query[0]); 
    if(!query[0]) return res.send({status:'error'})
    return res.send({...query[0], status:'ok'}); 
}



export const createUser = async (req, res) => {
    const { username, password, idPersona, idRol } = req.body;

    const result = await pool.query(
        'INSERT INTO usuario(username, password,id_persona,id_rol) values(?,?,?,?)',
        [username, password, idPersona, idRol]
    );

    res.status(200).send({
        status: "ok"
    });
}

export const getUsuarioByUsername = async (req, res) => {
    const { username } = req.params.username;

    try {
        const [rows] = await pool.query('SELECT * FROM usuario WHERE username=?', [username]);
        res.send(rows[0]);

    } catch (e) {
        res.send({status:"error"});
    }


}

