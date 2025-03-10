import { pool } from '../models/db.js';

export const insertarUsuario = async (req, res) => {
  const { usuario, password } = req.body;
  try {
    const query = 'INSERT INTO usuarios (usuario, password) VALUES (?, ?)';
    await pool.query(query, [usuario, password]);
    res.send('Datos insertados correctamente');
  } catch (error) {
    console.error('Error ejecutando la consulta:', error);
    res.status(500).json({ error: 'Error Interno del Servidor' });
  }
};
