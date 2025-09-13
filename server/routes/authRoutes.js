import express from 'express';
import User from '../models/user.js'; // Assuming you have a User model defined
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;
    try {
        if (password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match.' });
        }
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: 'Email Already used with another Account.' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = await User.create({
            name,
            email,
            password: hashedPassword, // In a real application, you should hash the password before saving it
        });

        res.status(201).json({ message: 'User registered successfully.' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error. Please try again later.' });
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'email or password is incorrect !' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'email or password is incorrect !' });
        }
        const token = jwt.sign({
            userId: user._id,
            name: user.name,
            email: user.email,
        }, process.env.JWT_SECRET,);

        res.cookie('token', token, {
            httpOnly: true,
            secure: false,
            sameSite: 'Lax',
            maxAge: 3600000,
        });

        res.status(200).json({ message: '✅ Login Successfull' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' })
    }
});

router.get('/logout', (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: true,
            sameSite: 'None'
        });
        return res.status(200).json({message: 'LoggedOut'});
    } catch (error) {
        return res.status(400).json({message: 'Internal Server Error'});
    }
})


export default router;