import { Request, Response } from 'express';
import { Order } from '../../models/Order';

// TODO validate with zod.
// TODO send status code for each response.

export async function deleteOrder(req: Request, res: Response) {
    const { orderId } = req.params;

    const hasOrderId = await Order.exists({_id: orderId});

    if (!hasOrderId) {
        return res.status(404).json({
            message: 'Order not found.'
        });
    }

    await Order.deleteOne({
        _id: orderId
    });

    res.json({
        message: `Order ${orderId} successfully deleted.`
    });
}
