import { Request, Response } from 'express';
import { Product } from '../../models/Product';

// TODO validate with zod

export async function createProduct(req: Request, res: Response) {
    try {
        const imagePath = req.file?.filename;
        const { name, description, price, category, ingredients} = req.body;
        const product = await Product.create({
            name,
            description,
            imagePath,
            price: Number(price).toFixed(2),
            category,
            ingredients: ingredients ? JSON.parse(ingredients) : [],
        });

        res.status(201).json(product);
    } catch (err){
        console.log(err);
        res.sendStatus(500);
    }
}
