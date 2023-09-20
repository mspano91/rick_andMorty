import React from "react";
import Cards from "./Cards";
import { Toaster } from "react-hot-toast";

function Home({ characters, onClose }) {
  return (
    <div>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            marginTop: "800px",
            marginLeft: "1500px",
            border: "1px solid #713200",
            padding: "16px",
            color: "#ffff",
            background: "#a61179",
          },
        }}
      />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default Home;
