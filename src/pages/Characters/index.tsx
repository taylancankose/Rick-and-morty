import { useQuery } from "@apollo/client";
import { SEARCH_CHARACTERS } from "./queries";
import { useContext, useState } from "react";
import { CharacterType } from "../../types/types";
import { ThemeContext } from "../../context/theme";
import CharCard from "../../components/CharCard";
import "./characters.css";

function Characters() {
  const [form, setForm] = useState({
    input: "",
    gender: "",
  });
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;

  const { data, refetch } = useQuery(SEARCH_CHARACTERS, {
    variables: {
      page: 1,
      name: form.input,
      gender: form?.gender,
    },
  });

  const searchedChars = data?.characters?.results;

  const handleSearch = (e: any) => {
    e.preventDefault();
    refetch({ page: 1, name: form.input });
  };
  const handleSelect = (e: any) => {
    setForm({
      ...form,
      gender: e.target.value,
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
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onSubmit={handleSearch}
        >
          <div>
            <input
              style={{
                padding: 4,
                width: 350,
                height: 50,
                border: "none",
                borderRadius: 55,
                paddingLeft: 18,
                backgroundColor: colors.gray80,
                fontSize: 14,
                color: colors.gray0,
              }}
              value={form.input}
              type="text"
              name="input"
              placeholder="Character, episode, planet"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
            />
            <button type="submit" style={{ display: "none" }}>
              Submit
            </button>
          </div>
          <div>
            <input
              onClick={handleSelect}
              type="radio"
              name="gender"
              value={"male"}
              id="male"
            />
            <label
              htmlFor="male"
              style={{
                color: colors.gray0,
                marginRight: 10,
                marginLeft: 4,
              }}
            >
              Male
            </label>
            <input
              onClick={handleSelect}
              type="radio"
              name="gender"
              value={"female"}
              id="femaile"
            />
            <label
              htmlFor="female"
              style={{
                color: colors.gray0,
                marginRight: 10,
                marginLeft: 4,
              }}
            >
              Female
            </label>
            <input
              onClick={handleSelect}
              type="radio"
              name="gender"
              value={"unknown"}
              id="unknown"
            />
            <label
              htmlFor="unknown"
              style={{
                color: colors.gray0,
                marginRight: 10,
                marginLeft: 4,
              }}
            >
              Unknown
            </label>
            <input
              onClick={handleSelect}
              type="radio"
              name="gender"
              value={"genderless"}
              id="genderless"
            />
            <label
              style={{
                color: colors.gray0,
                marginRight: 10,
                marginLeft: 4,
              }}
              htmlFor="genderless"
            >
              Genderless
            </label>
          </div>
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
