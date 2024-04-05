import { useQuery } from "@apollo/client";
import { SEARCH_CHARACTERS } from "./queries";
import { useContext, useState, useRef } from "react";
import { CharacterType } from "../../types/types";
import { ThemeContext } from "../../context/theme";
import CharCard from "../../components/CharCard";
import "./characters.css";

function Characters() {
  const [input, setInput] = useState("");
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;

  const { data, refetch } = useQuery(SEARCH_CHARACTERS, {
    variables: {
      page: 1,
      name: input,
    },
  });

  const searchedChars = data?.characters?.results;
  console.log(searchedChars);

  const formRef = useRef(null); // Form referansını oluştur

  const handleSearch = (e) => {
    e.preventDefault(); // Formun varsayılan davranışını durdur
    refetch({ page: 1, name: input }); // Yeniden sorgula
    // Formun olduğu yere kaydır
    formRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        backgroundColor: colors.constrastBody,
      }}
    >
      <div className="inner_char_container">
        <form
          style={{
            margin: "10px",
            marginBottom: 20,
            display: "flex",
          }}
          onSubmit={handleSearch} // Form submit olduğunda handleSearch fonksiyonunu çağır
          ref={formRef} // Forma referans ekle
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
            value={input}
            type="text"
            placeholder="Character, episode, planet"
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" style={{ display: "none" }}>
            Submit
          </button>
        </form>
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
          {searchedChars?.map((char: CharacterType) => {
            return <CharCard char={char} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Characters;
