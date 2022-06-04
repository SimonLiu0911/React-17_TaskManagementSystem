module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "simon" && req.body.password === "123") {
      return res.status(200).json({
        user: {
          name: "simon",
          token: "111",
        },
      });
    } else {
      return res.status(400).json({ message: "帳號密碼有誤" });
    }
  }
  next();
};
