import User from '../models/User.js';
import bcrypt from 'bcrypt';
import c from 'config'
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {

    const { username, email, password } = req.body;

    if (!email || !password || !username) {
      return res.status(400).send("All credentials are required");
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).send("User already exists");
    }

    const user = new User({ username, email, password });
    const salt = bcrypt.genSalt(Number(10))
    user.password = bcrypt.hash(password,salt)

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, c.get('JWTKEY'), { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
