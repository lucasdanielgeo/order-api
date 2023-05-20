import { Request, Response } from 'express';
import { Order } from '../../models/Order';

// TODO validate with zod

export async function createOrder(req: Request, res: Response) {
    try {
        const { table, products } = req.body;

        const order = await Order.create({ table, products });

        res.status(201).json(order);
    } catch (err){
        console.log(err);
        res.sendStatus(500);
    }
}
