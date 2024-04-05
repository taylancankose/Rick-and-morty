import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "./queries";
import { useContext, useState } from "react";
import { CharacterType } from "../../types/types";
import { ThemeContext } from "../../context/theme";
import CharCard from "../../components/CharCard";
import "./characters.css";

function Characters() {
  const [page, setPage] = useState<number>(1);
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  const { data, loading, error } = useQuery(GET_ALL_CHARACTERS, {
    variables: {
      page: 1,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  const { results: characters } = data?.characters;

  return (
    <div
      style={{
        backgroundColor: colors.constrastBody,
      }}
    >
      <div className="inner_char_container">
        <div
          style={{
            margin: "10px",
            marginBottom: 20,
            display: "flex",
          }}
        >
          <input
            style={{
              padding: 4,
              width: "30%",
              height: 50,
              border: "none",
              borderRadius: 55,
              paddingLeft: 18,
              backgroundColor: colors.gray80,
              fontSize: 14,
              color: colors.gray0,
            }}
            type="text"
            placeholder="Character, episode, planet"
          />
          <div></div>
        </div>
        <div className="title_container">
          <h3
            style={{
              fontSize: 24,
              color: colors.gray0,
            }}
          >
            Characters
          </h3>
          <a
            href="#"
            style={{
              fontSize: 15,
              color: colors.gray0,
            }}
          >
            See All
          </a>
        </div>
        <div className="character_container">
          {characters.map((char: CharacterType) => {
            return <CharCard char={char} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Characters;
