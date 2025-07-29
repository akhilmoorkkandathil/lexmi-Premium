const User = require('../models/user');

// Example only — for real use, hash passwords and handle tokens
exports.login = async (req, res) => {
  const { username, password } = req.body;
  
  try {
    const user = await User.findOne({ username });
// // Else insert
// const user = new User({ username: 'manu', password: 'manu123' });
// const result = await user.save();
// return res.status(201).json({
//       message: 'User created successfully',
//       user: result
//     });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
