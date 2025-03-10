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

import express from 'express';
import { getClinica } from '../controller/clinica.controller.js';

const router = express.Router();

router.get('/usuarios', getClinica);

export default router;
