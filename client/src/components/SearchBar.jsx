import { useState } from "react";
// import styles from "../index.scss";
export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <input
        className="inputNav"
        type="search"
        placeholder="Insert a number..."
        onChange={handleChange}
        value={id}
      />
      <button
        className="addBtn"
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        ADD
      </button>
    </div>
  );
}
