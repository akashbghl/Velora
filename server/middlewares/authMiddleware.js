import jwt from 'jsonwebtoken'

const authMiddleware = (req,res,next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.status(400).json({message: 'Unauthorized Access !'});
    }
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        return next();
    } catch (error) {
        console.log('Authentication Error: ',error);
        return res.status(403).json({message:'Forbidden Access !'});
    }

}

export default authMiddleware