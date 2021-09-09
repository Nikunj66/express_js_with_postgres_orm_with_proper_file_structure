import { User } from '../entities/User';
import {Request, Response} from "express";

export async function createUser(req: Request, res: Response){
	const {first_name,last_name,age} = req.body;

	const user=User.create({
		first_name: first_name,
		last_name: last_name,
		age: age,
	});

	await user.save().then(()=>{
		res.status(200).send({
		"success": true,
        "statusCode": 200,
        "message": "User registered successfully",
        "result": user
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
	const user=await User.find();
	if(!user)
	{
		res.status(200).send({
		"success": false,
        "statusCode": 200,
        "message": "Something went wrong!!! Try again",
        "result":user 
		});
	}
	else
	{
		res.status(200).send({
		"success": true,
        "statusCode": 200,
        "message": "Successfully get the data of User",
        "result":user 
		});
	}
}

export async function getOne(req: Request, res:Response){
	const user=await User.findOne(req.params.id);
	if(!user)
	{
		res.status(200).send({
		"success": false,
        "statusCode": 200,
        "message": "Something went wrong!!! Try again",
        "result":user 
		});
	}
	else
	{
		res.status(200).send({
		"success": true,
        "statusCode": 200,
        "message": "Successfully get the data of Perticular User",
        "result":user 
		});
	}
}

export async function deleteUser(req:Request,res:Response){
	const user=await User.delete(req.params.id);
	if(!user.affected)
	{
		res.status(200).send({
		"success": false,
        "statusCode": 200,
        "message": "Something went wrong!!! Try again",
        "result":user 
		});
		
	}
	else
	{
		res.status(200).send({
		"success": true,
        "statusCode": 200,
        "message": "Successfully Deleted User.",
        "result":user 
		});
		
	}
}

export async function updateUser(req:Request,res:Response){
	const uid:number=+req.params.id;
	const user=await User.update({ id:  uid},req.body);
	if(!user.affected)
	{
		res.status(200).send({
		"success": false,
        "statusCode": 200,
        "message": "Something went wrong!!! Try again",
        "result":user 
		});
	}
	else
	{
		res.status(200).send({
		"success": true,
        "statusCode": 200,
        "message": "Successfully updated User.",
        "result":user 
		});
	}
}
