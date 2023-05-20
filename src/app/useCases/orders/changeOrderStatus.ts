import { Request, Response } from 'express';
import { Order } from '../../models/Order';

// TODO validate with zod

export async function changeOrderStatus(req: Request, res: Response) {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
            return res.status(400).json({
                error: 'Status should be: WATING, IN_PRODUCTION or DONE.'
            });
        }

        await Order.findByIdAndUpdate(orderId, {status});

        res.status(201).json(orderId);
    } catch (err){
        console.log(err);
        res.sendStatus(500);
    }
}
