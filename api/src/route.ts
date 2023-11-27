import { carRoutes } from "./route/car.route";
import { Express } from "express";
import { clientRoutes } from "./route/client.route";
import { quotationRoutes } from "./route/quotation.route";
import { workOrderRoutes } from "./route/work-order.route";
import { productRoutes } from "./route/product.route";
import { productStockRoutes } from "./route/product-stock.route";

export class Route {
    handler(app: Express): void {
        app.use('/api/quotation', quotationRoutes);
        app.use('/api/car', carRoutes);
        app.use('/api/client', clientRoutes);
        app.use('/api/workorder', workOrderRoutes);
        app.use('/api/product', productRoutes);
        app.use('/api/productstock', productStockRoutes);
    };
};