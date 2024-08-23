import { Router } from "express";


// Import the subroutes
import authRoutes from "./auth.js";

const routes = Router();

// Define the subroutes
routes.use('/auth', authRoutes);

routes.get('/test', (req, res) => {
    res.json({
        message: "Hello World",
    });
});




export default routes;