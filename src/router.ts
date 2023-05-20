import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { createCategories } from './app/useCases/categories/createCategory';
import { deleteCategories } from './app/useCases/categories/deleteCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';

import { listProducts } from './app/useCases/products/listProducts';
import { createProduct } from './app/useCases/products/createProduct';
import { deleteProduct } from './app/useCases/products/deleteProduct';

import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { deleteOrder } from './app/useCases/orders/deleteOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';

export const router = Router();

const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, callback) {
            callback(null, path.resolve(__dirname, '..', 'uploads'));
        },
        filename(req, file, callback) {
            callback(null, `${Date.now()}-${file.originalname}`);
        }
    })
});

// List categories

router.get('/categories', listCategories);

// Create category
router.post('/categories', createCategories);

// Create category
router.delete('/categories', deleteCategories);

// List produts
router.get('/products', listProducts);

// Create Product
router.post('/products',
    upload.single('image'),
    createProduct
);

// List produts
router.delete('/products/:productId', deleteProduct);

// Get product by category
router.get('/categories/:categoryId/products', listProductsByCategory);


// List orders
router.get('/orders', listOrders);

// Create order
router.post('/orders', createOrder);

// Change order status
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/cancel order (TODO a logical deletion)
router.delete('/orders/:orderId', deleteOrder);

