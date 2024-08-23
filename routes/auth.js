import { Router } from "express";

const authRouter = Router();

authRouter.post('/login', ( req, res ) => {
    res.json({
        message: "Login route",
    });
});

authRouter.post('register', ( req, res ) => {
    res.json({
        message: "Register route",
    });
});

authRouter.get('/validate-email', ( req, res ) => {
    res.json({
        message: "Validate email route",
    });
});

export default authRouter;