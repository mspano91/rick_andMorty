const users = require("../utils/users");

const login = (req, res) => {
  const { email, password } = req.query;
  const userFound = users.find(
    (user) => user.email === email && user.password === password
  );
  return userFound //pregunta a userFound si encontro algo...si encontro entonces status200 sino 404
    ? res.status(200).json({ access: true }) //retorname un objeto con access true
    : res.status(404).json({ access: false }); //retorname un objeto false
};

module.exports = login;
