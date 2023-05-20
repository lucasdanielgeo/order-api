import { Request, Response } from 'express';
import { Category } from '../../models/Category';

// TODO validate with zod.
// TODO send status code for each response.

export async function deleteCategories(req: Request, res: Response) {
    const { categoryId } = req.params;

    const hasCategoryId = await Category.exists({_id: categoryId});

    if (!hasCategoryId) {
        return res.send('Category not found');
    }
    await Category.deleteOne({
        _id: categoryId
    });

    res.json(`category ${categoryId} deleted`);
}
