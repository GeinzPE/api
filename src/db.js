import { createPool } from "mysql2/promise";//le colocamos como promesa para reoslver erroeres en index,js
//creamos conexion y lo exportamos
export const pool =createPool({
    host:'localhost',
    user:'root',
    password:'benja123',
    port:3306,
    database:'apis'
})

