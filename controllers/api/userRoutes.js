const router = require("express").Router();
const { User } = require("../../models");

// Login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    // If no data, throw err
    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again." });
      return;
    }

    // Checks password from the userData
    const validPassword = await userData.checkPassword(req.body.checkPassword);

    // If password is wrong, throw err.
    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again." });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Creates user
router.post("/", (req, res) => {
  User.create(req.body)
    .then((newUser) => {
      res.send(newUser);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
