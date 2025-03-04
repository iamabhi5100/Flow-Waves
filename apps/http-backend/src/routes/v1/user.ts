import {generateKey , generateToken, verifyToken} from "authenticator";
import { Router } from "express";

const router:Router = Router();

router.post("/signup", async (req, res) => {
    const phoneNumber = req.body.phoneNumber;
    const totp = generateToken(phoneNumber + "SIGNUP");

    // send topt to phone number
    res.json({
        // totp    
        id: 1
    })
});

router.post("/signup/verify", async (req, res) => {
    const phoneNumber = req.body.phoneNumber;

    if(!verifyToken(phoneNumber + "SIGNUP", req.body.otp)){
        res.json({
            message: "Invalid token",
        })
    }

    // set user to verified in db
    res.json({
        
    })

});


export default router;
