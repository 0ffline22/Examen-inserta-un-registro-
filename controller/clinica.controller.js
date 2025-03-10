//import { pool } from '../models/db.js';

//export const getClinica = async (req, res) => {
  //try {
    //const [rows] = await pool.query('SELECT * FROM usuarios');
    //res.json(rows);
  //} catch (error) {
    //console.error('Error executing query:', error);
    //res.status(500).json({ error: 'Internal Server Error' });
  //}
//};

import { pool } from '../models/db.js';

export const getClinica = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM usuarios');
    res.json(rows);
  } catch (error) {
    console.error('Error ejecutando la consulta:', error);
    res.status(500).json({ error: 'Error Interno del Servidor' });
  }
};
