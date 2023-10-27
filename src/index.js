import express from "express";
import index from '../src/routes/index.js'
import employes from './routes/employes.js';//importamos las rutas
const app = express()

//primero resivimos los datos 
app.use(express.json())


app.use(index)
app.use('/api',employes)

//mostramos errores en caso que este mal la ruta
app.use((req,res,next)=>{
    res.status(404).json({
        msg:"endpoind not found"
    })
})
const port =3000
app.listen(port)
console.log(`escuchando por el puesto ${port}`)