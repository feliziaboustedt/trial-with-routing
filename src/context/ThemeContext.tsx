import { createContext } from "react";

export type Theme = {
name: string;
bgc: string;
fgc:string;
}

export type Themes = {
    light: Theme,
    dark: Theme,
}

export const themes: Themes = {
    dark: {
        name: "moody",
        bgc: "#2F353B",
        fgc: "white",
    },
    light: {
        name: "happy",
        bgc: "#F5E16C", 
        fgc: "white",
    }

}

export const ThemeContext = createContext<Theme>(themes.light);