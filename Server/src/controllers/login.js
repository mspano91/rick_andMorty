const { User } = require("../DB_connection");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.query;

    if (!email || !password) return res.status(400).send("missing data");
    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(404).send("user not found");
    return user.password === password
      ? res.json({ access: true })
      : res.status(403).send("incorrect password");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
