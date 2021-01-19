const User = require("../models/User");


// Will create a new User document, using the email and password provided by the user. Then a new passport session will be created for that user
const registerCreate = async (req, res, next) => {
  const { email, password } = req.body;
  const user = User.create({ email, password });
  req.session.user = user
  req.login(user, (err) => {
    if (err) {
      return next(err);
    }
  });
  res.send(user);
};

// Makes a Query to the database to check if the password matches a User document with a specific email, if successful, will create a new passport session for that user
const loginCreate = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.send("Invalid User");
  }
  const validUser = await user.verifyPassword(password);
  if (!validUser) {
    return res.send("Invalid Password");
  }
  req.session.user = user;
  res.send("Logged In");
};

// req.logout() terminates the login session, then the user is returned text saying that they have been logged out
const logout = (req, res) => {
  req.logout();
  res.send("Logged Out");
};





module.exports = {
  registerCreate,
  loginCreate,
  logout,
  
};
