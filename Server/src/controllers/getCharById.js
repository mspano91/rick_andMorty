const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`;

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios(`${URL}/${id}`);
    const { name, gender, species, origin, image, status } = response.data;

    if (name) {
      const character = {
        id,
        name,
        gender,
        species,
        origin: origin.name,
        image,
        status,
      };

      return res.status(200).json(character);
    } else {
      // Si no se encuentra el personaje, devolver un objeto vacío en lugar de 404
      return res.status(404).send("not found");
      // return res.status(200).json({});
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getCharById,
};
