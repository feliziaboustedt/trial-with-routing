import type React from "react"
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export type ButtonProps = {
 onClick: () => void;
 children: React.ReactNode; 
}

export const Button = ({onClick, children}: ButtonProps) => {
    const currentTheme = useContext(ThemeContext);

    return <>
    <button onClick={onClick} style={{color: currentTheme.fgc, backgroundColor: currentTheme.bgc}}>{children}</button>
    </>
}