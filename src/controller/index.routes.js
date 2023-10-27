import { pool } from '../db.js';
const ping =async (req, res) => {
    const resultado = await pool.query('select 1+5 as resultado')
    res.json(resultado)
}

export {
    ping
}