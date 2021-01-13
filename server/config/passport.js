const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");

passport.serializeUser(async (user, done) => {
  const userInfo = await user;
  console.log(userInfo)
  done(null, userInfo._id);
});

passport.deserializeUser((id, done) => {
  User.findById(id,  (err, user) => {
    done(err, user)
  })
});

passport.use(new LocalStrategy({
  usernameField: "email"
}, async (email, password, done) => {
  const user = await User.findOne({email}).catch(done)
  if (!user) { return done(null, false) }
  if (!user.verifyPassword(password)) { return done(null, false) }
  return done(null, user)
}))

