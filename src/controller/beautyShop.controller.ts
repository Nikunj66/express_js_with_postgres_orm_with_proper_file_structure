import {Request, Response} from "express";
import { BeautyShop } from '../entities/BeautyShop';

export async function createBeautyShop(req: Request, res: Response){
	const {name,introduction_content,is_active} = req.body;

	const beautyShop=BeautyShop.create({
		name: name,
		introduction_content: introduction_content,
		is_active: is_active,
	});

	await beautyShop.save().then(()=>{
		res.status(200).send({
		"success": true,
        "statusCode": 200,
        "message": "Beauty Shop registered successfully",
        "result": beautyShop
		});
	}).catch((err)=>{
		res.status(200).send({
		"success": false,
        "statusCode": 200,
        "message": "Something went wrong!!! Try again.",
		});
	});

	
}


export async function getAll(req:Request,res:Response){
	const beautyShop=await BeautyShop.find();
	if(!beautyShop)
	{
		res.status(200).send({
		"success": false,
        "statusCode": 200,
        "message": "Something went wrong!!! Try again",
        "result":beautyShop 
		});
	}
	else
	{
		res.status(200).send({
		"success": true,
        "statusCode": 200,
        "message": "Successfully get the data of Beauty Shop",
        "result":beautyShop 
		});
	}
}

export async function getOne(req: Request, res:Response){
	const beautyShop=await BeautyShop.findOne(req.params.id);
	if(!beautyShop)
	{
		res.status(200).send({
		"success": false,
        "statusCode": 200,
        "message": "Something went wrong!!! Try again",
        "result":beautyShop 
		});
	}
	else
	{
		res.status(200).send({
		"success": true,
        "statusCode": 200,
        "message": "Successfully get the data of Perticular Beauty Shop",
        "result":beautyShop 
		});
	}
}

export async function deleteBeautyShop(req:Request,res:Response){
	const beautyShop=await BeautyShop.delete(req.params.id);
	if(!beautyShop.affected)
	{
		res.status(200).send({
		"success": false,
        "statusCode": 200,
        "message": "Something went wrong!!! Try again",
        "result":beautyShop 
		});
		
	}
	else
	{
		res.status(200).send({
		"success": true,
        "statusCode": 200,
        "message": "Successfully Deleted Beauty Shop.",
        "result":beautyShop 
		});
		
	}
}

export async function updateBeautyShop(req:Request,res:Response){
	const bid:number=+req.params.id;
	const beautyShop=await BeautyShop.update({ id:  bid},req.body);
	if(!beautyShop.affected)
	{
		res.status(200).send({
		"success": false,
        "statusCode": 200,
        "message": "Something went wrong!!! Try again",
        "result":beautyShop 
		});
	}
	else
	{
		res.status(200).send({
		"success": true,
        "statusCode": 200,
        "message": "Successfully updated Beauty Shop.",
        "result":beautyShop 
		});
	}
}
