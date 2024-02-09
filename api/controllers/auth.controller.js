import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import {errorHandler} from '../utils/error.js';
import jwt from 'jsonwebtoken';
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


export const signin = async(req, res, next)=>{
   const {email, password} = req.body;
   if(!email || !password || email ==='' || password === ''){
      next(errorHandler(400, 'All fields are required'))
   }
try {
   const validUser = await User.findOne({email});
   if (!validUser){
      return next(errorHandler(404, 'email/passsword is not valid'));
   }
   const validPassword = bcryptjs.compareSync(password, validUser.password);
   if(!validPassword){
      return next(errorHandler(400, 'email/passsword is not valid'))
   }
   const token = jwt.sign({id: validUser._id}, process.env.TOKEN_SECRET_KEY, {expiresIn: '1d'});
   //removing password from user data.
   const filterUser = await User.findById(validUser._id).select("-password");
   res.status(200).cookie('access_token', token, {
      httpOnly: true
   }).json({user: filterUser, message: 'Signin Successful'});

} catch (error) {
   next(error)
}

}

