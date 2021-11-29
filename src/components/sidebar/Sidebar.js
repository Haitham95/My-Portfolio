import classes from "./Sidebar.module.css";
import svg from "./certificate-solid.svg";
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
          <li>github</li>
          <li>facebook</li>
          <li>linkedin</li>
          <li>icon</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
