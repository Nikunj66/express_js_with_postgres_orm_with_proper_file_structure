import express from 'express';
import { createUser, deleteUser, getAll, getOne, updateUser } from '../controller/user.controller';


const router = express.Router();

router.post("/", createUser);
router.get("",getAll);
router.get("/:id",getOne);
router.delete("/:id",deleteUser);
router.put("/:id",updateUser);
export { router as user };
