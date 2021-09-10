import e, {Request, Response} from "express";
import { ShopInfo } from '../entities/ShopInfo';

export async function createBeautyShop(req: Request, res: Response){
	const {address,contact_no,email,image,latitude,longitude,business_hour,company_registered_no,zip_code,is_active,beauty_shop_id} = req.body;

	const shopInfo=ShopInfo.create({
		address,
        contact_no,
        email,
        image,
        latitude,
        longitude,
        business_hour,
        company_registered_no,
        zip_code,
		is_active
	});

	await shopInfo.save().then(()=>{
		res.status(200).send({
		"success": true,
        "statusCode": 200,
        "message": "Shop Info registered successfully",
        "result": shopInfo
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
	const shopInfo=await ShopInfo.find();
	if(!shopInfo)
	{
		res.status(200).send({
		"success": false,
        "statusCode": 200,
        "message": "Something went wrong!!! Try again",
        "result":shopInfo 
		});
	}
	else
	{
		res.status(200).send({
		"success": true,
        "statusCode": 200,
        "message": "Successfully get the data of Shop Info",
        "result":shopInfo 
		});
	}
}

export async function getOne(req: Request, res:Response){
	const shopInfo=await ShopInfo.findOne(req.params.id);
	if(!shopInfo)
	{
		res.status(200).send({
		"success": false,
        "statusCode": 200,
        "message": "Something went wrong!!! Try again",
        "result":shopInfo 
		});
	}
	else
	{
		res.status(200).send({
		"success": true,
        "statusCode": 200,
        "message": "Successfully get the data of Perticular Shop Info",
        "result":shopInfo 
		});
	}
}

export async function deleteBeautyShop(req:Request,res:Response){
	const shopInfo=await ShopInfo.delete(req.params.id);
	if(!shopInfo.affected)
	{
		res.status(200).send({
		"success": false,
        "statusCode": 200,
        "message": "Something went wrong!!! Try again",
        "result":shopInfo 
		});
		
	}
	else
	{
		res.status(200).send({
		"success": true,
        "statusCode": 200,
        "message": "Successfully Deleted Shop Info.",
        "result":shopInfo 
		});
		
	}
}

export async function updateBeautyShop(req:Request,res:Response){
	const sid:number=+req.params.id;
	const beautyShop=await ShopInfo.update({ id:  sid},req.body);
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
