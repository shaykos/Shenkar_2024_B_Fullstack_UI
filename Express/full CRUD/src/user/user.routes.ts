//ייבוא אובייקט 
import { Router } from 'express';
import { deleteUser, getAll, getUserById, login, register, updateUser } from './user.controller';

const userRoutes = Router();

userRoutes
    .get('/', getAll)
    .get('/:id/', getUserById)
    .post('/login', login)
    .post('/register', register)
    .put('/update', updateUser)
    .delete('/delete/:id', deleteUser)

export default userRoutes;