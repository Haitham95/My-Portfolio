import { NavLink } from "react-router-dom";
import welcomeIcon from "../../assets/icons/home-outline.svg";
import aboutIcon from "../../assets/icons/person-circle-outline.svg";
import workIcon from "../../assets/icons/code-slash-outline.svg";
import contactIcon from "../../assets/icons/mail-outline.svg";
import classes from "./Tabs.module.css";

const Tabs = (props) => {
  return (
    <ul className={classes["nav_links"]}>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <img src={welcomeIcon} className={classes.icon} alt="welcome-icon" />
          welcome
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <img src={aboutIcon} className={classes.icon} alt="about-icon" />
          About Me
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/work"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <img src={workIcon} className={classes.icon} alt="work-icon" />
          Work
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <img src={contactIcon} className={classes.icon} alt="contact-icon" />
          let's talk
        </NavLink>
      </li>
    </ul>
  );
};

export default Tabs;
