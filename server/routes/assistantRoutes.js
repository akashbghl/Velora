import express from 'express';
const router = express.Router();

router.get('/',(req, res) => {
    try {
        res.status(200).json({success:true, publickey: process.env.VAPI_PUBLIC_KEY, assistantId: process.env.VAPI_ASSISTANT_ID});
    } catch (error) {
        res.status(500).json({success:false, message:error.message});
    }
});

export default router;