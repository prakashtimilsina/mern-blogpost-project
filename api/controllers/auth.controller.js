import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import {errorHandler} from '../utils/error.js'
export const signup = async (req, res, next) => {
    const { username, email, password} = req.body;
    
     try {
        if(!username || !email || !password || username === '' || email === '' || password === '' ){
            // return res.status(400).json({message: "All fields are required"});
            next(errorHandler(400, "All fields are required" ));
        }
        const hashpassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashpassword
         })
        await newUser.save();
        res.json('Signup is successful.')
     } catch (error) {
        next(error)
     }
};