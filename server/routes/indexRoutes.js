import express from 'express'
import authMiddleware from '../middlewares/authmiddleware.js';

const router = express.Router();

router.get('/authentication',authMiddleware,(req,res)=>{
    return res.status(200).json({data: req.user , message: '✅ Aunthenticated user'});
})

export default router;