import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

function MainContent() {
  const [characters, setCharacters] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    async function getCharacters() {
      try {
        const response = await axios.get(
          "https://www.breakingbadapi.com/api/characters"
        );
        setCharacters(await response.data);
        console.log(await response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getCharacters();
  }, []);

  return (
    <div style={mainStyle}>
      {characters.map((character) => (
        <CharacterCard character={character} key={character.char_id} />
      ))}
    </div>
  );
}

const mainStyle = {
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "5vw",
  marginRight: "5vw",
  justifyContent: "space-between",
};

export default MainContent;
