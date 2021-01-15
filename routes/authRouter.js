const passport = require("passport");
const router = require("express").Router();
const { registerCreate, logout } = require("../controllers/authController")

// Route to create a new user
router.post('/register', registerCreate)

// Route to login, will redirect user to a certain route depending on the outcome of the authentication
router.post("/login", passport.authenticate("local", { failureRedirect: "/login", successRedirect: "/", failureFlash: 'Invalid username or password.', successFlash: "You Are Logged In!" }))


// Route to logout
router.get("/logout", logout)

module.exports = router;
