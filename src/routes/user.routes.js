import {Router} from 'express'
const router = Router();
import {getUsers, getUserById,createUser,deleteUser,updateUser} from '../controllers/user.controller'


router.get('/users',getUsers);
router.get('/users/:id',getUserById );
router.post('/users',createUser);
router.put('/users',updateUser);
router.delete('/users/:id',deleteUser);


export default router