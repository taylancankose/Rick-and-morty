import { createContext, useContext, useEffect, useState } from "react";
import themes from "../themes";
import { ThemeType } from "../types/theme";
import { colors } from "../themes/dark";

export const ThemeContext = createContext<ThemeType>({
  key: "dark",
  colors: colors,
});

const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<ThemeType>({
    key: "dark",
    colors: colors,
  });

  const toggleTheme = () => {
    setTheme({
      ...theme,
      key: theme.key === "dark" ? "light" : "dark",
    });
  };

  useEffect(() => {
    if (theme.key === "dark") {
      setTheme({
        ...theme,
        colors: themes[1].colors,
      });
    } else {
      setTheme({
        ...theme,
        colors: themes[0].colors,
      });
    }
  }, [themes, theme.key]);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
