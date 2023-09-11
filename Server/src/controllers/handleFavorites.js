let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;

  myFavorites.push(character);

  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  const charsFiltered = myFavorites.filter(
    (fav) => Number(fav.id) !== Number(id)
  );
  myFavorites = charsFiltered;
  //en vez de poner Number(id) ponemos +id para parsearlo. es otro metodo
  return res.status(200).json(charsFiltered);
};

module.exports = {
  postFav,
  deleteFav,
};
