import { NavLink } from "react-router";
import "./Navigation.css";
import { useState } from "react";
import { ThemeContext, themes, type Theme } from "../../context/ThemeContext";
import { Button } from "../Button";

export const Navigation = () => {
const [theme, setTheme] = useState<Theme>(themes.light);

  const toggleTheme = () => {
    if (theme.name === themes.light.name) {
      setTheme(themes.dark);
    } else {
      setTheme(themes.light);
    }
    // theme.name === themes.light.name ? setTheme(themes.dark) : setTheme(themes.light);
  };


    return <>
    <ul className="navigation">
        <li><NavLink to={"/"}>Portfolio</NavLink></li>
        <li><NavLink to={"/contact"}>Kontakt</NavLink></li>
        <li><NavLink to={"/CV"}>CV</NavLink></li>
    </ul>
     <ThemeContext.Provider value={theme}>
        <Button onClick={toggleTheme}>
          Change to:{" "}
          {theme.name === themes.light.name
            ? themes.dark.name
            : themes.light.name}
        </Button>
      </ThemeContext.Provider>
    

    </>
}