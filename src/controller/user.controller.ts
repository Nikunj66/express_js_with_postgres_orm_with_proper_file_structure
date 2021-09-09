import { User } from '../entities/User';
import {Request, Response} from "express";

export async function createUser(req: Request, res: Response){
	const {first_name,last_name,age} = req.body;

	const user=User.create({
		first_name: first_name,
		last_name: last_name,
		age: age,
	});

	await user.save();

	res.json(user);
}


export async function getAll(req:Request,res:Response){
	res.json(await User.find());
}

export async function getOne(req: Request, res:Response){
	res.json(await User.findOne(req.params.id))
}

export async function deleteUser(req:Request,res:Response){
	res.json(await User.delete(req.params.id))
}

export async function updateUser(req:Request,res:Response){
	const uid:number=+req.params.id;
	res.json(await User.update({ id:  uid},req.body));
}
