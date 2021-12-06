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
          <span>welcome</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <img src={aboutIcon} className={classes.icon} alt="about-icon" />
          <span>About me</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/work"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <img src={workIcon} className={classes.icon} alt="work-icon" />
          <span>Work</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? classes.active : "")}
        >
          <img src={contactIcon} className={classes.icon} alt="contact-icon" />
          <span>let's talk</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default Tabs;
