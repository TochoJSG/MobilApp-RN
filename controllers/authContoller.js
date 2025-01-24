const User = require('../models/User');
const CryptoJs = require('crypto-js');
const jwt = require('jsonwebtoken');

module.exports = {
    createUser: async(req,res)=>{
        const newUser = new User({
            userName: req.body.userName,
            email: req.body.email,
            location: req.body.location,
            password: CryptoJs.AES.encrypt(req.body.password, process.env.SICHER).toString,
        });

        try{
            await newUser.save();
            res.status(200).json({message:'Create Successfuly'});
        }catch(error){
            res.status(500).json({message:error});
        }
    },
    loginUser: async(req,res)=>{
        try{
            const user = await User.findOne({email:req.body.email});
            //!user && res.status(401).json("Wrong Credentials provide a valid email");
            
            if(!user) return res.status(401).json('Wrong Credentials')
            
            const decryptedPassword = CryptoJs.AES.decrypt(user.password, process.env.SICHER);
            const decryptedPass = decryptedPassword.toString(CryptoJs.enc.Utf8 );

            if(decryptedPass !== req.body.password) return res.status(401).json("Wrong Password");
            //decryptedPass !== req.body.password && res.status(401).json("Wrong Password");

            const userToken = jwt.sign(
                {
                    id:user.id
                }, process.env.JWT_SEC, { expiresIn:"3d" }
            );

            const { password, __v, createdAt, updatedAt, ...userData } = user._doc;

            res.status(200).json({ ...userData, token:userToken });
        }catch(error){
            res.status(500).json({message:error});
        }
    },
}