import { Router } from "express";

export class AuthRoutes {

    static get routes() {

        const routes = Router();

        routes.post('/login', ( req, res ) => {
            res.json({
                message: "Login route",
            });
        });

        routes.post('register', ( req, res ) => {
            res.json({
                message: "Register route",
            });
        });

        routes.get('/validate-email', ( req, res ) => {
            res.json({
                message: "Validate email route",
            });
        });

        return routes;
    }
}