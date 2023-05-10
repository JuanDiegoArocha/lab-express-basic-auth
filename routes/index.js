const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

const authRouter = require("./signup.routes");
router.use("/auth", authRouter);

const userRouter = require("./perfil.routes");
router.use("/user", userRouter);

module.exports = router;
