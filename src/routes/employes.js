import { Router } from "express";//creamos las rutas
import { getEmployees ,postEmplyees,putEmployees,deleteEmployees,busqueda} from '../controller/Employees.js'
const router = Router()

router.get('/empleados', getEmployees)
router.post('/empleados',postEmplyees)
router.put('/empleados/:id', putEmployees)
router.delete('/empleados/:id',deleteEmployees)
router.get('/empleados/:id',busqueda)

export default router;