const { Favorite } = require("../DB_connection");

module.exports = async (req, res) => {
  try {
    const { id } = req.params;

    const userDelete = await Favorite.findByPk(id);
    userDelete.destroy();

    const allFavorites = await Favorite.findAll();
    return res.status(200).json(allFavorites);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
