import classes from "./Sidebar.module.css";
import svg from "./certificate-solid.svg";
import github from "../../assets/icons/github-brands.svg";
import facebook from "../../assets/icons/facebook-brands.svg";
import linkedin from "../../assets/icons/linkedin-brands.svg";
import Tabs from "./Tabs";

const Sidebar = (props) => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.logo}>
        <img src={svg} alt="logo" />
      </div>
      <Tabs onClick={props.onClick} />
      <div className={classes.social}>
        <ul className={classes["social_links"]}>
          <li>
            <a
              href="https://github.com/Haitham95"
              target="_blank"
              rel="noreferrer"
              className={classes.github}
            >
              <img src={github} alt="github-icon-link"></img>
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/hiitshaitham"
              className={classes.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="facebook-icon-link"></img>
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/hiitshaitham"
              className={classes.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin-icon-link"></img>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
