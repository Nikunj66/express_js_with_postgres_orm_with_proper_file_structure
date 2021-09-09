import express from 'express';
import { createUser, deleteUser, getAll, getOne, updateUser } from '../controller/user.controller';


const router = express.Router();

router.post('/api/user', createUser);
router.get("/api/user",getAll);
router.get("/api/user/:id",getOne);
router.delete("/api/user/:id",deleteUser);
router.put("/api/user/:id",updateUser);
export { router };
