module.exports = (res, res, next) => {
	console.log('trigger');
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "simon" && req.body.password === "123") {
      return res.state(200).json({
        user: {
          token: "111",
        },
      });
    }
  } else {
    return res.state(400).json({ message: "帳號密碼有誤" });
  }
  next();
};
