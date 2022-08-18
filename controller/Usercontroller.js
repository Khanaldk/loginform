import UserModel from "../models/User.js";
import bcrypt from 'bcrypt'
class UserController
{
    static Home=(req,res)=>
    {
        res.render('index')
    }

    static Registration=(req,res)=>
    {
        res.render('../views/registration')
    }

    static Login=(req,res)=>
    {
        res.render('../views/login')
    }

    static Changepassword=(req,res)=>
    {
        res.render('../views/changepassword')
    }

    static createUserdoc= async(req,res)=>
    {
        const hashpassword=await bcrypt.hash(req.body.password,10)
        const doc= new UserModel({
            name:req.body.name,
            email:req.body.email,
            password:hashpassword, 
        })
        await doc.save();
        res.redirect('/login')
    }

    static Loginuser= async(req,res)=>
    {
        const {email,password}=req.body;
        const result= await UserModel.findOne({email:email})
        if(result!=null)
        {
            const ismatch= await bcrypt.compare(password,result.password)
            if(result.email==email && ismatch)
            {
                res.send(`Saved to dashboard ${result}`)
            }else{
            res.send("<h2>email or password is invalid...</h2>")

            }
        }else{
            res.send("<h2>You arenot the registered user...</h2>")
        }

       
    }

    static Newpassword= async(req,res)=>
    {
        const {email,password}=req.body;
        const result= await UserModel.findOne({email:email})
        if(!result)
        {
            console.log("Unmatched email");
        }
        const ismatch=await bcrypt.compare(password,result.password)

        if((result.email==email) && ismatch)
        {
         const docsav= new UserModel({
            email:req.body.email,
            password:req.body.password
        
         })  
         await docsav.save();  
         res.send("<h2>Password Successfully changed...</h2>")


        }else{
            res.send("<h2>email or password doesnot match...</h2>")

        }


    }
}

export default UserController






// if(email && password)
// {
//     if(result.email==email && result.password==password)
//     {
//         res.send(`<h2>save to Dashboard ${result}</h2`)
        
//     }else{
//         res.send("<h2>Email or password is invalid...</h2>")
//     }
// }else{
//     res.send("<h2>ALl fields are required...</h2>")
// }