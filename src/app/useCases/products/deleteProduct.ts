import { Request, Response } from 'express';
import { Product } from '../../models/Product';

// TODO validate with zod.
// TODO send status code for each response.

export async function deleteProduct(req: Request, res: Response) {
    const { productId } = req.params;

    const hasProductId = await Product.exists({_id: productId});

    if (!hasProductId) {
        return res.send('Product not found');
    }
    await Product.deleteOne({
        _id: productId
    });

    res.json(`product ${productId} deleted`);
}
