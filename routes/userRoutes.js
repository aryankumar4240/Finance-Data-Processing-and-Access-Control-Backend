const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// REGISTER
router.post('/register', async (req,res)=>{
    const { name, email, password, role } = req.body;
  
    const existingUser = await User.findOne({ email });
    if(existingUser){
      return res.status(400).json({ message: "User already exists" });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });
  
    res.json(user);
  });

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // 1. user check
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
  
    // 2. password match
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Wrong password" });
  
    // 3. token generate
    const token = jwt.sign(
      { id: user._id, role: user.role },
      "secret123", // baad me .env me dalenge
      { expiresIn: "1d" }
    );
  
    // 4. response
    res.json({ token });
  });


// check user
router.get('/check', async (req, res) => {
    try {
  const user = await User.find();
  res.json(user);
} catch (err) {
    res.status(500).json({error:err.message });
}
});

// get users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
