import { pool } from "../db.js"


const getEmployees = async (req, res, next) => {
    try {
        const [rows] = await pool.query('select * from employee')
        res.json(rows)
    } catch (error) {
        console.log(error)
        next();
    }
}

const busqueda = async (req, res, next) => {
    try {
        const user = req.params.id;
        const [rows] = await pool.query('select * from employee where id = ?', [user]);

        if (rows.length > 0) {
            res.json(rows);
        } else {
            res.json({ msg: "El usuario no existe" });
        }
    } catch (error) {
        console.log(error)
        next();
    }
}

const postEmplyees = async (req, res, next) => {
    try {
        const { id, name, salty } = req.body
        const [rows] = await pool.query('insert into employee (id,name,salty) value(?,?,?)', [id, name, salty])//pasamos los valores en objetos
        res.send({
            //devolvemos la forma en la que queremos ver el json
            id: rows.insertId,
            name,
            salty,

        })
    } catch (error) {
        console.log(error)
        next();
    }
}

const deleteEmployees = async (req, res, next) => {

    try {
        const usuario = req.params.id
        const [rows] = await pool.query('delete from employee where id=?', [usuario]);
        res.json({ msg: 'el usuario se elimino correctamente' })
    } catch (error) {
        console.log(error)
        next();
    }
}

const putEmployees = async (req, res,next) => {
    try {
        const usuario = req.params.id
        const { name, salty } = req.body;

        const [result] = await pool.query('update employee set name = ?, salty = ? where id = ?', [name, salty, usuario]);
        //comprovamos si se actualuizo 
        if (result.affectedRows === 0) return res.status(404).json({
            msg: 'employess noyt found'
        })

        const [rows] = await pool.query('select * from employee where id=?', [usuario])//pasamoe el objeto que se actualizo

        res.json(rows)
    } catch (error) {
        console.log(error)
        next();
    }
}


export {
    getEmployees,
    postEmplyees,
    putEmployees,
    deleteEmployees,
    busqueda

}