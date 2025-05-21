import { NavLink } from "react-router";
import "./Navigation.css";

export const Navigation = () => {

    return <>
    <ul className="navigation">
        <li><NavLink to={"/"}>Portfolio</NavLink></li>
        <li><NavLink to={"/contact"}>Kontakt</NavLink></li>
        <li><NavLink to={"/CV"}>CV</NavLink></li>
    </ul>

    </>
}