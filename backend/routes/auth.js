const router = require("express").Router();
const passport = require("passport");

router.get("/logout", (req, res, next) => {
  req.logout((err) => next(err));
  return res.redirect(process.env.CLIENT_URL);
});
router.get("/login/success", (req, res) => {
  if (req.user)
    return res.status(200).json({
      success: true,
      msg: "successful",
      user: req.user,
      // cookies: req.cookies,
    });
});

router.get("/login/failed", (req, res) => {
  return res.status(401).json({ success: false, msg: "Failure" });
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
router.get("/github", passport.authenticate("github", { scope: ["profile"] }));
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);
router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);
module.exports = router;
