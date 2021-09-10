import express from "express";
import { createBeautyShop, deleteBeautyShop, getAll, getOne, updateBeautyShop } from "../controller/beautyShop.controller";

const router = express.Router();

router.post("/", createBeautyShop);
router.get("",getAll);
router.get("/:id",getOne);
router.delete("/:id",deleteBeautyShop);
router.put("/:id",updateBeautyShop);
export { router as beautyShop };