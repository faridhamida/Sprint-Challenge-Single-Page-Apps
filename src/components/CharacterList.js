import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Col, Row, Container } from "reactstrap";
import {Link} from "react-router-dom";
import SearchForm from "./SearchForm";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [newData, setNewData] = useState([])

  const search = charArr => {
    setNewData(charArr)

  }; 
  useEffect(() => {
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        const characterInfo = response.data.results;
        console.log("Character Info", characterInfo);
        setCharacters(characterInfo);
        setNewData(characterInfo);
      })
      .catch(error => {
        console.log("The data was not returned", error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>The Crazy Characters</h2>
      <Link to={"/"}><button>Home</button></Link>
      <SearchForm search={search} characters={characters} />
      <Container>
        <div >
          <Row>
            {newData.map(character => {
              return (
                
                <Col xs="12" md="6" xl="4">
                  <CharacterCard
                    key={character.id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    type={character.type}
                    image={character.image}
                  />
                </Col>
                
              )
            })}
          </Row>
        </div>

      </Container>
    </section>
  );
}
