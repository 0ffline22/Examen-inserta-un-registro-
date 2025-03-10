import mysql from 'mysql2/promise';

export const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'novato22',
  database: 'taller3m',
});

(async () => {
    try {
        await pool.query('SELECT 1');
        console.log('Connected to MySQL');

        // Consulta para seleccionar todos los registros de la tabla `usuario`
        const [rows, fields] = await pool.query('SELECT * FROM usuario');
        console.log('Registros en la tabla usuario:');
        console.log(rows);

    } catch (err) {
        console.error('Error connecting to MySQL:', err);
    } finally {
        pool.end();
    }
})();

pool.on('error', (err) => {
    console.error('MySQL error:', err);
});
