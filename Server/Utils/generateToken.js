import jwt  from "jsonwebtoken";

const generateTokenAndSetCookie=(userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    });

    res.cookie('jwt',token,{
        httpOnly:true,      // this will prevent the cookie from being accessed by javascript
        secure:process.env.NODE_ENV !== "development",        // this will make sure that the cookie is only sent on https
        sameSite:'strict',   // this will make sure that the cookie is only sent on the same site
        maxAge:15 * 24 * 60 * 60 * 1000 // 15 days
        
    })
}

export default generateTokenAndSetCookie;