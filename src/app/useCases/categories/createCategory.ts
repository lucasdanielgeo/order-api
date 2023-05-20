import { Request, Response } from 'express';
import { Category } from '../../models/Category';

// TODO validate with zod


export async function createCategories(req: Request, res: Response) {
    try {
        const { icon, name } = req.body;

        const hasCategoryId = await Category.exists({ name });

        if (hasCategoryId) {
            return res.status(409).send('Category already exists');
        }

        const category = await Category.create({ icon, name });

        res.status(201).json(category);
    } catch (err){
        console.log(err);
        res.sendStatus(500);
    }
}
