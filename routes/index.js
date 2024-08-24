import { Router } from "express";

// Import the subroutes
import { AuthRoutes } from "./auth.js";

export class AppRoutes {

    static get routes() {

        const routes = Router();

        // Define the subroutes
        routes.use( '/auth', AuthRoutes.routes );

        routes.get( '/test', (req, res) => {
            res.json({
                message: "Hello World",
            });
        });

        return routes;
    }
}