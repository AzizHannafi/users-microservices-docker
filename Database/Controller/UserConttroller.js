const { User } = require('../Model/UserModel')

/**
 * Get all Users.
 */

 const getAllUsers = async (req, res) => {
    try {
      const UsersList = await User.find();
      let AllUsers = UsersList.map((list) => {
        return list;
      });
      res.status(200).json({ message: "Operation Succeded", AllUsers });
    } catch (err) {
      res.status(404).json({
        message: "No Data Found.",
      });
      throw err;
    }
  };

/**
 * Update User.
 */

 const UpdateUser = async (req, res) => {
  try {
    var user = {
      username: req.body.username,
      age: req.body.age,
      email: req.body.email,
      phone: req.body.phone,
     
    };
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: user },
      { new: true }
    );

   res.status(200).json({ message: "Operation Succeded", updatedUser });
  } catch (err) {
    res.status(304).json({ message: "Operation to Update Failed." });
    throw err;
  }
};

  module.exports = {
    getAllUsers,
    UpdateUser,
  }