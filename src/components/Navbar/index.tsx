import Logo from "../../assets/rm.png";
import ThemeSwitch from "../ThemeSwitch";
import { ThemeContext } from "../../context/theme";
import { useContext, useState } from "react";
import "./nav.css";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { colors } = theme;

  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State for drawer menu

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div
      className="nav_container"
      style={{
        backgroundColor: theme?.colors.gray100,
      }}
    >
      <div className="header_container">
        <img src={Logo} width={300} className="logo" />
        <div className="header_right">
          <ThemeSwitch onClick={toggleTheme} />
          <button
            className="menu-toggle"
            style={{
              color: colors.gray0,
            }}
            onClick={toggleDrawer}
          >
            Menu
          </button>
          <nav
            style={{
              backgroundColor: colors.gray80,
            }}
            id="drawer"
            className={isDrawerOpen ? "open" : ""}
          >
            <ul>
              <li>
                <a
                  style={{
                    color: colors.gray0,
                  }}
                  onClick={toggleDrawer} // Menü elemanlarına tıklandığında menüyü kapat
                >
                  Random Character
                </a>
              </li>
              <li>
                <a
                  style={{
                    color: colors.gray0,
                  }}
                  onClick={toggleDrawer} // Menü elemanlarına tıklandığında menüyü kapat
                >
                  Favorites
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
