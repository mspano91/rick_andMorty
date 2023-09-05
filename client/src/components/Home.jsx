import React from "react";
import Cards from "./Cards";

function Home({ characters, onClose }) {
  return (
    <div>
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default Home;
