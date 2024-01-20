import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const {username, email, password} = req.body;

    if(!username || !email || username === '' || email === '' || password === '' || !password){
        return res.status(400).json({message: "All fields are requires"});
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    try{
        await newUser.save();
        res.json('Signup done!');
    } catch(err) {
        res.status(500).json({message: err.message});
    }
};