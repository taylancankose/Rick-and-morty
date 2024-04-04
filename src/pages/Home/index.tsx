import { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import "./index.css";
import DarkBG from "../../assets/dark-bg.png";
import LightBG from "../../assets/light-bg.png";

function Home() {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;
  return (
    <div
      className="container"
      style={{
        backgroundColor: colors.gray100,
      }}
    >
      <div className="inner_container">
        <div id="title">
          <h1
            className="title"
            style={{
              color: colors.gray0,
            }}
          >
            Rick and Morty
          </h1>
          <h3
            className="subtitle"
            style={{
              color: colors.gray0,
            }}
          >
            Discover characters, episodes and more.
          </h3>
          <div
            style={{
              marginTop: 40,
            }}
          >
            <button
              className="btn"
              style={{
                backgroundColor: colors.rmBlue,
                color: colors.gray100,
              }}
            >
              Start Discover
            </button>
            <h4
              className="slogan"
              style={{
                color: colors.rmGreen,
              }}
            >
              Wubba Lubba Dub Dub!
            </h4>
          </div>
        </div>
        <div id="image">
          <img
            className="bg_img"
            src={theme.key === "dark" ? DarkBG : LightBG}
            height={theme.key === "dark" && 500}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
